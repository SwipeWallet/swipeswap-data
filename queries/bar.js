const ws = require('isomorphic-ws');
const { SubscriptionClient } = require('subscriptions-transport-ws'); 

const { request, gql } = require('graphql-request');

const { graphAPIEndpoints, graphWSEndpoints, barAddress } = require('./../constants')
const { timestampToBlock } = require('./../utils');

module.exports = {
    async info({block = undefined, timestamp = undefined} = {}) {
        block = block ? block : timestamp ? (await timestampToBlock(timestamp)) : undefined;
        block = block ? `block: { number: ${block} }` : "";

        const result = await request(graphAPIEndpoints.bar,
            gql`{
                    bar(id: "${barAddress}", ${block}) {
                        ${info.properties.toString()}
                    }
                }`
        );

        return info.callback(result.bar);
    },

    observeInfo() {
        const query = gql`
            subscription {
                bar(id: "${barAddress}") {
                    ${info.properties.toString()}
                }
        }`;

        const client = new SubscriptionClient(graphWSEndpoints.bar, { reconnect: true, }, ws,);
        const observable = client.request({ query });

        return {
            subscribe({next, error, complete}) {
                return observable.subscribe({
                    next(results) {
                        next(info.callback(results.data.bar));
                    },
                    error,
                    complete
                });
            }
        };
    },

    async user({block = undefined, timestamp = undefined, user_address = undefined} = {}) {
        if(!user_address) { throw new Error("swipe-data: User address undefined"); }

        block = block ? block : timestamp ? (await timestampToBlock(timestamp)) : undefined;
        block = block ? `block: { number: ${block} }` : "";

        const result = await request(graphAPIEndpoints.bar,
            gql`{
                    user(id: "${user_address.toLowerCase()}", ${block}) {
                        ${user.properties.toString()}
                    }
                }`
        );

        return user.callback(result.user);
    },
}

const info = {
    properties: [
        'decimals',
        'name',
        'swipe',
        'symbol',
        'totalSupply',
        'ratio',
        'xSwipeMinted',
        'xSwipeBurned',
        'swipeStaked',
        'swipeStakedUSD',
        'swipeHarvested',
        'swipeHarvestedUSD',
        'xSwipeAge',
        'xSwipeAgeDestroyed',
        'updatedAt'
    ],

    callback(results) {
        return ({
            decimals: Number(results.decimals),
            name: results.name,
            swipe: results.swipe,
            symbol: results.symbol,
            totalSupply: Number(results.totalSupply),
            ratio: Number(results.ratio),
            xSwipeMinted: Number(results.xSwipeMinted),
            xSwipeBurned: Number(results.xSwipeBurned),
            swipeStaked: Number(results.totalSupply) * Number(results.ratio),
            swipeStakedUSD: Number(results.swipeStakedUSD),
            swipeHarvested: Number(results.swipeHarvested),
            swipeHarvestedUSD: Number(results.swipeHarvestedUSD),
            xSwipeAge: Number(results.xSwipeAge),
            xSwipeAgeDestroyed: Number(results.xSwipeAgeDestroyed),
            updatedAt: Number(results.updatedAt)
        })
    }
};

const user = {
    properties: [
        'xSwipe',
        'xSwipeIn',
        'xSwipeOut',
        'xSwipeMinted',
        'xSwipeBurned',
        'xSwipeOffset',
        'xSwipeAge',
        'xSwipeAgeDestroyed',
        'swipeStaked',
        'swipeStakedUSD',
        'swipeHarvested',
        'swipeHarvestedUSD',
        'swipeIn',
        'swipeOut',
        'usdOut',
        'usdIn',
        'updatedAt',
        'swipeOffset',
        'usdOffset'
    ],

    callback(results) {
        return ({
            xSwipe: Number(results.xSwipe),
            xSwipeIn: Number(results.xSwipeIn),
            xSwipeOut: Number(results.xSwipeOut),
            xSwipeMinted: Number(results.xSwipeMinted),
            xSwipeBurned: Number(results.xSwipeBurned),
            xSwipeOffset: Number(results.xSwipeOffset),
            xSwipeAge: Number(results.xSwipeAge),
            xSwipeAgeDestroyed: Number(results.xSwipeAgeDestroyed),
            swipeStaked: Number(results.swipeStaked),
            swipeStakedUSD: Number(results.swipeStakedUSD),
            swipeHarvested: Number(results.swipeHarvested),
            swipeHarvestedUSD: Number(results.swipeHarvestedUSD),
            swipeIn: Number(results.swipeIn),
            swipeOut: Number(results.swipeOut),
            usdOut: Number(results.usdOut),
            usdIn: Number(results.usdIn),
            updatedAt: Number(results.updatedAt),
            swipeOffset: Number(results.swipeOffset),
            usdOffset: Number(results.usdOffset)
        })
    }
};
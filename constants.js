module.exports = {
    graphAPIEndpoints: {
        masterchef: 'https://api.thegraph.com/subgraphs/name/swipewallet/swipeswap',
        bar: 'https://api.thegraph.com/subgraphs/name/swipewallet/swipe-bar',
        timelock: 'https://api.thegraph.com/subgraphs/name/swipewallet/swipe-timelock',
        maker: 'https://api.thegraph.com/subgraphs/name/swipewallet/swipe-maker',
        exchange: 'https://api.thegraph.com/subgraphs/name/swipewallet/exchange',
        exchange_v1: 'https://api.thegraph.com/subgraphs/name/swipewallet/exchange',
        blocklytics: 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks',
        lockup: 'https://api.thegraph.com/subgraphs/name/matthewlilley/lockup',
    },

    graphWSEndpoints: {
        bar: 'wss://api.thegraph.com/subgraphs/name/swipewallet/swipe-bar',
        exchange: 'wss://api.thegraph.com/subgraphs/name/swipewallet/exchange',
        blocklytics: 'wss://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks'
    },

    barAddress: "0x8798249c2e607446efb7ad49ec89dd1865ff4272",
    makerAddress: "0xe11fc0b43ab98eb91e9836129d1ee7c3bc95df50",
    chefAddress: "0x252dd6a11ef272a438a36d1a2370eed820099547",
    swipeAddress: "0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9",
    factoryAddress: "0x8a93b6865c4492ff17252219b87ea6920848edc0",

    TWENTY_FOUR_HOURS: 86400,
}

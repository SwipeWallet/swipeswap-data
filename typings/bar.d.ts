type Info = {
    decimals: number;
    name: string;
    swipe: string;
    symbol: string;
    totalSupply: number;
    ratio: number;
    xSwipeMinted: number;
    xSwipeBurned: number;
    swipeStaked: number;
    swipeStakedUSD: number;
    swipeHarvested: number;
    swipeHarvestedUSD: number;
    xSwipeAge: number;
    xSwipeAgeDestroyed: number;
    updatedAt: number;
}

export function info({ block, timestamp }?: {
    block?: number;
    timestamp?: number;
}): Promise<Info>;

export function observeInfo(): {
    subscribe({ next, error, complete }: {
        next?(data: Info): any;
        error?(error: any): any;
        complete?: Function;
    }): any;
};



type User = {
    xSwipe: number;
    xSwipeIn: number;
    xSwipeOut: number;
    xSwipeMinted: number;
    xSwipeBurned: number;
    xSwipeOffset: number;
    xSwipeAge: number;
    xSwipeAgeDestroyed: number;
    swipeStaked: number;
    swipeStakedUSD: number;
    swipeHarvested: number;
    swipeHarvestedUSD: number;
    swipeIn: number;
    swipeOut: number;
    usdOut: number;
    usdIn: number;
    updatedAt: number;
    swipeOffset: number;
    usdOffset: number;
}

export function user({ block, timestamp, user_address }: {
    block?: number;
    timestamp?: number;
    user_address: string;
}): Promise<User>;

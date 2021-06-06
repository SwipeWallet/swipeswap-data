type User = {
    id: string,
    address: string,
    amount: number,
    rewardDebt: number,
    pool: {
        id: string,
        balance: number,
        accSwipePerShare: number
    },
    swipeAtLockup: number,
    swipeHarvestedSinceLockup: number,
    swipeLocked: number,
}

export function user({ block, timestamp, user_address }: {
    block?: number;
    timestamp?: number;
    user_address: string;
}): Promise<User[]>;
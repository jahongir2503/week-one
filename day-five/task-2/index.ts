function getOptimalBanknotes(N: number): Record<number, number> {
    const denominations = [100, 50, 10, 5, 2, 1];

    const result: Record<number, number> = {};

    for (const denomination of denominations) {
        const count = Math.floor(N / denomination);

        if (count > 0) {
            result[denomination] = count;

            N -= count * denomination;
        }
    }
    return result;
}

console.log(getOptimalBanknotes(289));

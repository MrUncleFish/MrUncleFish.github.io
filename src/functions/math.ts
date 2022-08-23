export function generateRandomIntegerInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomNumberList(length: number, rangeMin: number, rangeMax: number): number[] {

    let result = [];
    for (let i = 0; i < length; i++) result.push(generateRandomIntegerInRange(rangeMin, rangeMax))
    return result;
}
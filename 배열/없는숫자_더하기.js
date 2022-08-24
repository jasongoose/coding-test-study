function solution(numbers) {
    const total = numbers.reduce((acc, cur) => acc + cur)
    return 45 - total;
}
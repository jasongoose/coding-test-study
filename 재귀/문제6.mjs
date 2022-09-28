function solution(n, prev = 0, next = 1) {
    if (n === 0) {
        return;
    }
    console.log(next);
    solution(n - 1, next, prev + next);
}
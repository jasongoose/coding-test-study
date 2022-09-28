function solution(n, acc = 1) {
    if (n === 0) {
        console.log(acc);
        return;
    }
    solution(n - 1, acc * n);
}
function solution(n, acc = 0) {
    if (n === 0) {
        console.log(acc);
        return;
    }
    solution(n - 1, acc + n);
}
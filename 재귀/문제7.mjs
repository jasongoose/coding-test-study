function solution(n, acc = '') {
    if (n == 0) {
        console.log(acc);
        return;
    }
    solution(Math.floor(n / 2), n % 2 + acc);
}
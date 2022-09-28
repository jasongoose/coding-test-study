function solution(n) {
    if (n === 0) {
        return;
    }
    console.log(n);
    solution(n - 1);
}
function solution(x, y) {
    if (y <= x) {
        return;
    }
    if (x % 2) {
        console.log(x);
        solution(x + 2, y);
    } else {
        solution(x + 1, y);
    }
}
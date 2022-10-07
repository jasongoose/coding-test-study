function solution(numbers, target) {
    let ans = 0;

    function dfs(numbers, target, curr = 0, acc = 0) {
        if (curr === numbers.length) {
            if (acc === target) {
                ans++;
            }
            return;
        }
        dfs(numbers, target, curr + 1, acc + numbers[curr]);
        dfs(numbers, target, curr + 1, acc - numbers[curr]);
    }

    dfs(numbers, target);
    return ans;
}
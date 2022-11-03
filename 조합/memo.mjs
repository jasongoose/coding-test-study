// 조합은 순열과 다르게 순서가 중요하지 않고 선택하는 경우의 수를 따지는 것이 목적이다.
// 현재 index에서 하나 고를 때마다 누적된 조합을 저장하는 별도의 배열이 필요하다.
// index 오름차순으로 골라야 중복을 방지할 수 있다.
function combination(ans, arr, target = arr.length, fillIdx = 0, acc = []) {
    if (acc.length === target) {
        ans.push([...acc]);
        return;
    }
    for (let i = fillIdx, { length } = arr; i < length; i++) {
        acc.push(arr[i]);
        combination(ans, arr, target, i + 1, acc);
        acc.pop();
    }
}
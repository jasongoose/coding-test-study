// 순열은 유한 개의 데이터를 나열하는 모든 경우들을 따지는 것이 목적이다.
// index가 0인 지점부터 올 수 있는 숫자들을 대입하고 그 다음 index에서도 동일한 작업을 재귀적으로 수행한다.
// 대입하는 행위는 원본 배열 swapping으로 구현한다.
function swap(i, j, arr) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function permuatation(ans, arr, target = arr.length, fillIdx = 0) {
    if (fillIdx === target) {
        ans.push(arr.slice(0, target));
        return;
    }
    for (let i = fillIdx, { length } = arr; i < length; i++) {
        swap(fillIdx, i, arr);
        permuatation(ans, arr, target, fillIdx + 1);
        swap(fillIdx, i, arr);
    }
}
function combination(arr, target, depth = 0, idx = 0, pick = Array(target).fill(null)) {
    if (depth === target) {
        console.log(pick.slice()); // 참고로 비동기적으로 수행됨
        return;
    }
    
    for (let i = idx,  { length } = arr; i < length; i++) {
        pick[depth] = arr[i];
        combination(arr, target, depth + 1, i + 1, pick);
    }
}

combination([1,2,3,4], 2);
// pick : 현재까지 생성한 조합
// target : 뽑을 요소의 개수
// depth : 다음에 선택할 요소의 pos
// 경우의 수를 구한 뒤에 추가적으로 수행할 작업을 callback으로 전달하는 문제도 있다.
// 조합은 target이 10 ~ 15라면 시간 초과가 뜰 수도 있다.
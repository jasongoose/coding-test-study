import { myStack } from './myStack.mjs';

function solution(array) {
    const l = array.length;
    const arr = array.reverse().map((e, i)=> ({ val: e, idx: l - i }));
    const stack = new myStack(l);
    const ans = Array(l).fill(null);

    for (let i=0; i<l; i++) {
        if (stack.isEmpty()) {
            stack.myPush(arr[i]);
            continue;
        }
        while (!stack.isEmpty() && stack.myPeek()['val'] < arr[i]['val']) {
            ans[stack.myPeek()['idx']] = arr[i]['idx'];
            stack.myPop();
        }
        stack.myPush(arr[i]);
    }
    while (!stack.isEmpty()) {
        ans[stack.myPeek()['idx']] = 0;
        stack.myPop();
    }
    return ans;
}

console.log(solution([6, 9, 5, 7, 4]));
console.log(solution([6, 9, 5, 10, 4]));

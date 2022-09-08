import { myStack } from "./myStack.mjs";

const MAX = 1_000_000;

function solution(arr) {
  const ms = new myStack(MAX);
  let ans = [];

  ms.myPush(arr[0]);

  for (let i=1; i<arr.length; i++) {
    (ms.myPeek() !== arr[i]) && ms.myPush(arr[i]);
  }
  
  while(!ms.isEmpty()) {
    ans.push(ms.myPeek());
    ms.myPop();
  }

  return ans.reverse();
}

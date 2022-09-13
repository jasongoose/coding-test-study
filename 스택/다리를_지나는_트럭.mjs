import { myStack } from "./myStack.mjs";

const MAX = 10_000;
// 기능개발 문제와 비슷하게 풀어보았는데 어디서 잘못된건지 모르겠습니다ㅠㅠ
function solution(bridge_length, weight, truck_weights) {
  const ms = new myStack(MAX);
  let ans = 0;
  let totalWeight = 0;

  ms.myPush(truck_weights[0]);
  totalWeight += ms.myPeek();

  for (let i = 1; i < truck_weights.length; i++) {
    if (
      totalWeight + truck_weights[i] <= weight &&
      ms.top < bridge_length - 1
    ) {
      ms.myPush(truck_weights[i]);
      totalWeight += ms.myPeek();
      continue;
    }

    ans += bridge_length + ms.top;
    while (!ms.isEmpty()) {
      ms.myPop();
    }

    ms.myPush(truck_weights[i]);
    totalWeight = ms.myPeek();
  }

  return ms.isEmpty() ? ans : ans + bridge_length + ms.top + 1;
}

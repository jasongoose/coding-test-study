import { myQueue } from "./myQueue.mjs";

const MAX = 10_000;

function solution(bridge_length, weight, truck_weights) {
  const q = new myQueue(MAX);
  let ans = 0;
  let cnt = 0;
  let sum = 0;

  for (let i = 0; i < truck_weights.length; i++) {
    if (cnt < bridge_length && sum + truck_weights[i] <= weight) {
      q.add(truck_weights[i]);
      cnt++;
      sum += truck_weights[i];
    } else {
      // 현재 로직에서 큐를 사용하는 이유를 잘 모르겠네요. 큐에 트럭의 무게를 넣는것만 있고, 빼서 계산하는 작업이 빠진것 같습니다.
      ans += bridge_length + cnt - 1;
      while (!q.isEmpty()) { // 
        q.remove();
      }
      cnt = 1;
      q.add(truck_weights[i]);
      sum = truck_weights[i];
    }
  }

  if (!q.isEmpty()) {
    ans += bridge_length + cnt - 1;
  }

  return ans + 1;
}

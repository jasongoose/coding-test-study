import { myQueue } from "./myQueue.mjs";

// 참고자료
// https://minhamina.tistory.com/241
function solution(bridge_length, weight, truck_weights) {
  const q = new myQueue(bridge_length);
  let sum = 0;
  let ans = 0;
  
  for (let i = 0; i < truck_weights.length; i++) {
    while(true) {
      if (q.isEmpty()) {
        q.add(truck_weights[i]);
        sum += truck_weights[i];
        ans++;
        break;
      } else if (q.isFull()) {
        sum -= q.peek();
        q.remove();
      } else {
        if (sum + truck_weights[i] <= weight) {
          q.add(truck_weights[i]);
          sum += truck_weights[i];
          ans++;
          break;
        } else {
          q.add(0);
          ans++;
        }
      }
    }
  }
  // 위 루프는 마지막 트럭이 다리에 오르자마자 끝나므로
  // 마지막 트럭이 다리에서 내려오기까지 시간을 더하는 것으로 마무리 짓는다.
  return ans + bridge_length;
}
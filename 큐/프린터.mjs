import { myQueue } from "./myQueue.mjs";

const MAX = 100;

function solution(priorities, location) {
  const q = new myQueue(MAX);
  let ans = 0;

  priorities.forEach((val, id) => {
    q.add({ val, id });
  });

  while (!q.isEmpty()) {
    const r = q.peek();
    q.remove();

    if (q.status.some((e) => r.val < (e?.val ?? -1))) {
      q.add(r);
    } else {
      ans++;
      if (r.id === location) {
        break;
      }
    }
  }

  return ans;
}

function solution(arr) {
  const answer = [arr[0]];
  let top = 0;

  for (let i = 1; i < arr.length; i++) {
    if (answer[top] !== arr[i]) {
      answer[++top] = arr[i];
    }
  }

  return answer;
}

// 동일하게 동작하는데 왜 아래 풀이는 효율성 테스트에서 실패가 뜨는지 궁금합니다!
// function solution([x, ...rest]) {
//   const answer = [x];
//   let top = 0;

//   rest.forEach((r) => {
//     if (answer[top] !== r) {
//       answer[++top] = r;
//     }
//   });

//   return answer;
// }

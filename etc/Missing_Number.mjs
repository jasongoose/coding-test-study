function solution(nums) {
  const n = nums.length;
  return (n * (n + 1)) / 2 - nums.reduce((acc, curr) => acc + curr);
}

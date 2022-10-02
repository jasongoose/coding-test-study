function stack(size) {
  const status = Array(size).fill(null);
  let top = -1;

  const isEmpty = () => top === -1;
  const isFull = () => top === size - 1;

  const getPeek = () => {
    if (isEmpty()) throw Error("스택이 비었습니다.");
    return this.status[this.top];
  };
  const push = (val) => {
    if (isFull()) throw Error("스택이 찼습니다.");
    status[++top] = val;
  };
  const pop = () => {
    if (isEmpty()) throw Error("스택이 비었습니다.");
    status[top--] = null;
  };

  return {
    status,
    push,
    pop,
    getPeek,
  };
}

function queue(size) {
  const l = size + 1;

  const status = Array(l).fill(null);
  let front = 0;
  let rear = 0;

  const enq = (val) => {
    if (isFull()) {
      throw Error("full");
    }
    rear = (rear + 1) % l;
    status[rear] = val;
  };
  const deq = () => {
    if (isEmpty()) {
      throw Error("empty");
    }
    front = (front + 1) % l;
    status[front] = null;
  };
  const getPeek = () => {
    return status[(front + 1) % l];
  };
  const isFull = () => {
    return (rear + 1) % l === front;
  };
  const isEmpty = () => {
    return rear === front;
  };

  return {
    status,
    enq,
    deq,
    getPeek,
  };
}

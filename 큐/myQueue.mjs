export function myQueue(size) {
  if (size <= 1) throw Error("oversized");
  const l = size + 1;

  this.status = Array(l).fill(null);
  this.front = 0;
  this.rear = 0;

  this.add = (val) => {
    if (this.isFull()) throw Error("full");
    this.rear = (this.rear + 1) % l;
    this.status[this.rear] = val;
  };
  this.remove = () => {
    if (this.isEmpty()) throw Error("empty");
    this.front = (this.front + 1) % l;
    this.status[this.front] = null;
  };
  this.peek = () => {
    return this.status[(this.front + 1) % l];
  };
  this.isFull = () => {
    return (this.rear + 1) % l === this.front;
  };
  this.isEmpty = () => {
    return this.front === this.rear;
  };
  this.log = () => {
    console.log(this.status, `front: ${this.front} rear: ${this.rear}`);
  };
}

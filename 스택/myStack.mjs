export function myStack(size) {
  this.status = Array(size).fill(null);
  this.top = -1;

  this.myPush = (val) => {
    if (this.isFull()) throw Error("스택이 찼습니다.");
    this.status[++this.top] = val;
  };
  this.myPop = () => {
    if (this.isEmpty()) throw Error("스택이 비었습니다.");
    this.status[this.top--] = null;
  };
  this.myPeek = () => {
    if (this.isEmpty()) throw Error("스택이 비었습니다.");
    return this.status[this.top];
  };
  this.isEmpty = () => this.top === -1;
  this.isFull = () => this.top === size - 1;
}

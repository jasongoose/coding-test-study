function myStack(size) {
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

const s = new myStack(5);

for (let i = 0; i < 5; i++) {
  s.myPush(i);
  console.log(s.status, s.top);
}

for (let i = 5; 0 <= i; i--) {
  s.myPop();
  console.log(s.status, s.top);
}

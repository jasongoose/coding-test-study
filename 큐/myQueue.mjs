function myQueue(size) {
    if (size <= 1) throw Error('oversized');
    this.status = Array(size + 1).fill(null);
    this.head = 0;
    this.rear = 1;

    this.add = (val) => {
        if (this.isFull()) throw Error('full');
        this.status[this.rear++] = val;
        this.rear %= size + 1;
    }
    this.remove = () => {
        if (this.isEmpty()) throw Error('empty');
        const val = this.status[this.head++];
        this.status[this.head] = null;
        this.head %= size + 1;
        return val;
    }
    this.peek = () => {
        return this.status[this.head];
    }
    this.isFull = () => {
        return this.head === this.rear;
    }
    this.isEmpty = () => {
        // return this.rear - this.head === 1;
        return this.status[this.head] === null;
    }
    this.log = ()=> {
        console.log(this.status, `head: ${this.head} tail: ${this.rear}`);
    }
}

function solution() {
    const q = new myQueue(5);
    q.add(1);
    q.log();
    q.add(2);
    q.log();
    q.add(3);
    q.log();
    q.add(4);
    q.log();

    q.remove();
    q.log();
    q.remove();
    q.log();
   
    q.add(5);
    q.log();
    q.add(6);
    q.log();

    q.add(7);
    q.log();
    
    q.remove();
    q.log();
}

solution();
class Queue {
    private list: number[] = [];
    private maxSize: number = 0;
    private currSize: number = 0;

    constructor(size: number) {
        this.maxSize = size;
        this.currSize = this.list.length;
    }

    enqueue(item: number): number {
        if (this.list.length >= this.maxSize) {
            console.log('Queue overflow!');
            return -1;
        }
        this.list[this.currSize] = item;
        this.currSize++;
        return 1;
    }

    dequeue(): number {
        if (this.list.length <= 0) {
            console.log('Queue underflow!');
            return -1;
        }
        for (let i = 0; i < this.list.length; i++) {
            this.list[i] = this.list[i + 1];
        }
        this.list.length = this.currSize - 1;
        this.currSize--;
        return 1;
    }

    front(): number {
        if (this.list.length <= 0) {
            console.log('Queue underflow!');
            return -1;
        }
        return this.list[0];
    }

    rear(): number {
        if (this.list.length <= 0) {
            console.log('Queue underflow!');
            return -1;
        }
        return this.list.length-1;
    }

    display(): number {
        console.log(this.list);
        return 1;
    }

}


let q1: Queue = new Queue(5);

q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);
q1.enqueue(4);
q1.enqueue(5);
q1.enqueue(6);
q1.dequeue();
q1.dequeue();
q1.dequeue();
q1.dequeue();
q1.dequeue();
q1.dequeue();
q1.display();
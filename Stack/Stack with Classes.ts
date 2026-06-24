class Stack {
    private list: number[] = [];
    private currentSize: number = 0;
    private maxSize: number = 1;
    constructor(size: number) {
        this.maxSize = size;
        this.currentSize = this.list.length;
    }

    push(newItem: number): number {
        if (this.currentSize >= this.maxSize) {
            console.log('Stack OverFlow!');
            return -1;
        }
        this.list[this.currentSize] = newItem;
        this.currentSize++;
        return 1;
    }

    pop(): number {
        if (this.currentSize < 0) {
            console.log('Stack underflow!');
            return -1;
        }
        this.currentSize--;
        this.list.length = this.currentSize;
        return 1;
    }

    display(): number[] {
        console.log(this.list);
        return this.list;
    }
}

let s1: Stack = new Stack(5);
 
s1.push(5);
s1.push(4);
s1.push(3);
s1.push(2);
s1.push(1);
s1.push(0);
s1.pop();
s1.push(0);
s1.display();

/* palendrome for integer */
function palendrome(arg: number): void {
    let copy: number = arg;
    let reverse: number = 0;

    while (copy > 0) {
        const lastDigit = copy % 10;
        copy = Math.floor(copy / 10);
        reverse = reverse * 10 + lastDigit;
    }
    console.log(reverse)
    if (reverse == arg) console.log('palendrome');
    else console.log('not palendrome');

}



/* Fibonacci Number */
function Fibonacci(arg: number) {
    if (arg <= 1) {
        console.log('-_-:  ', arg);
        return arg;
    };

    let prev: number = 0, current: number = 1, next: number=0;
    for (let i: number = 2; i <= arg; i++) {
        next = prev + current;
        prev = current;
        current = next;
    }
    console.log(next)
}

/* Missing Number */
function MissingNumber(arg: Array<number>){
    let sum =0;
    for(let i=0; i<arg.length; i++){
        sum += arg[i];
    };

    return arg.length*(arg.length+1)/2 - sum;
}
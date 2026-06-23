let data: any = [5, 6, 7, 8, 9];

function push(arr: number[], value: number) {
    let max: number = 5;
    let currSize = arr.length;

    if (currSize >= max) {
        console.error('Stack OverFlow');
        return -1;
    }
    arr[currSize] = value;
    currSize += 1;
    return arr;
}
// console.log(push(data, 10));
// console.log(push(data, 20));
// console.log(push(data, 30));
// console.log(push(data, 40));
// console.log(push(data, 50));
// console.log(push(data, 60));
function pop(arr: number[]) {
    let currSize = arr.length;
    console.log(currSize)
    if (currSize <= 0) {
        console.error("Stack Underflow");
        return -1;
    }
    arr.length = currSize - 1;
    return arr;

}

console.log(pop(data));
console.log(pop(data));
console.log(pop(data));
console.log(pop(data));
console.log(pop(data)); 
console.log(pop(data)); 
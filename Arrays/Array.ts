const nums: number[] = [15, 24, 33, 42, 51];
// console.log(nums);

//Accessing elements in array
const firstElement = nums[0];
const lastElement = nums[nums.length - 1];

// console.log(firstElement, lastElement, nums.length);

// Remove last element from an array
const lastElement1 = nums.pop();  // O(1)
// console.log(lastElement, nums);

// Add element to the end in an array
nums.push(99); // O(1)
// console.log(nums);

// Add element to the start in an array
nums.unshift(11);  // O(N)
// console.log(nums)

nums.shift(); // O(N)
// console.log(nums);

// Loop through an array
// for(let i=0; i<nums.length; i++){
//     console.log(nums[i]);
// }

// nums.forEach((num, index) => {
//     console.log(index);
// })

// for(let num of nums){
//     console.log(num)
// }


// How to delete, add & update element from specific index
const arr1: number[] = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// console.log(arr1.splice(1,3));
// arr1.splice(2, 0, 1,2,3,4,5);
// arr1.splice(1, 2, 333);
// console.log(arr1);


// splice vs slice
const subArr = arr1.slice(1, 4);
// console.log(subArr);

// Shallow Copy of Array
// const arrB = arr1;

// arrB.splice(1,4); // Also change the original array
// console.log(arrB, arr1);

// Deep Copy of Array
const arrC = [...arr1];
const arrD = Array.from(arr1);
const arrE = arr1.concat();
// arrC.splice(1,4);
// console.log(arrC, arr1);

// arrD.splice(1,4);
// console.log(arrD, arr1);

// arrD.splice(1,4);
// console.log(arrE, arr1);

// How to add two array in javascript?
const newArr: number[] = [...arr1, 101, 102, 103];
const newArr2 = arr1.concat(101, 102, 103);
// console.log(newArr2);

// Map, filter & Reduce
const x = [1, 5, 6, -9, -4, 2, -5];

const newMapArr = x.map((elem, i) => elem * 2);
// console.log(newMapArr);

const positiveNumber = x.filter((elem, i) => elem > 0);
// console.log(positiveNumber);

const sumOfArr = positiveNumber.reduce((acc, elem) => acc + elem, 0);
// console.log(sumOfArr);


// Flat 
const y = [1,2,3,[4,5,[7,7]],6];
const flattedAray = y.flat(2);
// console.log(flattedAray)

// Filter vs Find

const firstPositiveNumber = x.find((elem, i) => elem>0);
console.log(firstPositiveNumber)
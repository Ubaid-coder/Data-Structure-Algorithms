const nums: number[] = [15,24,33,42,51];
/* Question 1: How do you check if an element exists in an array? */

const findElement: Function = (arr: number[] ,target: number) => {
    for(let num of nums){
        if(num == target){
            return true;
        }
    }
    return false;
}

// console.log(findElement(nums, 24));
// console.log(nums.includes(24));

/* Question 2: How do you check if an element exits in an array? Return it's index */

const findElementIndex: Function = (arr: number[], target: number) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i] == target){
            return i;
        }
    }
    return -1;
}

// console.log(findElementIndex(nums, 15));

/* Question 3: How can you check if two arrays are equal? */
const isArrayEqual = (arr1: number[], arr2: number[]) => {
    // if(arr1.length !== arr2.length) return false;

    // for(let i=0; i<arr1.length; i++){
    //     if(arr1[i] !== arr2[i]) return false;
    // }
    // return true;

    return arr1.length === arr2.length && arr1.every((elem,i) => arr1[i] === arr2[i]);
}

// console.log(isArrayEqual([1,2,3,4],  [1,2,3,4]));

/* Question 4: How to sort an arry in asscendign and desending order? */
const x = [1,4,6,0,-9,-5];
x.sort(); //O(NlogN)
// console.log(x)
x.sort((a,b) => b-a);
// console.log(x);


/* Question 5: How to reverse an array? */
x.reverse();
console.log(x);
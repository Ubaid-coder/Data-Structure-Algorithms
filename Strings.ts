let firstName = "Muhammad";

// console.log(firstName);

// console.log(firstName[2]);
// console.log(firstName.charAt(2));
// console.log(firstName.charCodeAt(2));

// console.log(firstName.includes('m'));
// console.log(firstName.indexOf('m'));

function getindex(arr:string, target:string): number{
  for(let i=0; i<arr.length; i++){
    if(target === arr[i]) return i;
  }
    return -1;
}

console.log(firstName.lastIndexOf('m'));
let anotherName = "Ubaid";
console.log(firstName.localeCompare(anotherName));

const str = "This! is the way!";
// console.log(str.replace("!","@_@")); 
console.log(str.replaceAll("!", "."))

const fullName = "  Muhammad Ubaid  ";
console.log(fullName.startsWith("Muhammad"));

console.log(fullName.trim());
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

const model = "Tesla ";
const color = "Blue";
console.log(color.concat(model));

const obj = {
    name:"ubaid",
    course:"DSA"
}

console.log(obj, JSON.stringify(obj));
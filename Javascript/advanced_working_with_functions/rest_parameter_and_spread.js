function sum(...args){
    console.log("no. of argument :",arguments.length)
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
console.log(sum(1))
console.log(sum(1,2,3))
console.log(sum(1,2,3,4,5,6,7,8))
//Arrow functions do not have "arguments"
function sum1(a,b,...args){
    //console.log("no. of argument :",arguments.length)
    let sum = a+b;
    for (let arg of args) sum += arg;
    return sum;
}
console.log(sum1(1,2));
console.log(sum1(1,2,3,4,5,6,8));
let arr = [1,2,3,4,5];
console.log(Math.max(1,2,3,4,5));//gives 5
console.log(Math.max(arr));// nan
console.log(Math.max(...arr));


let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log( Math.max(...arr1, ...arr2) ); // 8
arr = [1, 2, 3];

let arrCopy = [...arr];

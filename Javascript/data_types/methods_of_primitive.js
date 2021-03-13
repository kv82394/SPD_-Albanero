let str = "Vivek";
str = str.toUpperCase();
console.log(str,str.toLowerCase());
console.log(str)// call function just return the desired val doesnot change in current value

// num.toFixed()
let n = 1.543752534
console.log(n.toFixed(2));

let num = new Number(0);
n = 0;
if (num){//true because its a object and objects are true 
    console.log("becouse num is object");
}
if (n){
    console.log("becouse n is not object and value is 0");
}
// task 
str = "Hello";

str.test = 5;

console.log(str.test);//this shows that primitives are not objest

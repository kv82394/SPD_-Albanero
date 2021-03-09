//syntax
// function showMessage() {
//     statment----
//   }
//function that checks your age
function checkAge(age){
    if (age>18){
        return true;
    }else {
        return false;
    }
}
let age = 19
console.log(checkAge(age));
//create a function retur the grater no.
function checkBig(a,b){
    if (a>b){
        return a;
    }else {
        return b;
    }

}
console.log(checkBig(10,12))
//write a function to calculate the power
function calPower(x,n){
    let sum = 1
    while(n--){
        sum = sum * x
    }
    return sum;
}
console.log(calPower(2,5));

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
let sayHi = function() {
    console.log( "Hello" );
  };//this function will work also if we remove the semicolon
sayHi()
let sayHello = sayHi// copying the function 
sayHello()

// callback
function calculator(sum , addition ,multiply,choice,val1,val2){
    switch (choice){
        case 1:
            sum(val1,val2)
            break;
        case 2 :
            multiply(val1,val2)
            break;
        case 3:
            multiply(val1,val2)
            break;
        default:
            console.log("invalid input")

    }

}
function sum(a,b){
    console.log(a+b)
}
function multiply(a,b){
    console.log(a*b)
}
function addition(a,b){
    console.log(a+b)
}
calculator(sum,addition,multiply,3,10,20)


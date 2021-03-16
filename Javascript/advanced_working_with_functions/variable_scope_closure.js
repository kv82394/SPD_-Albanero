function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  console.log(counter());//0
  console.log(counter());//1
  console.log(counter());//2
  console.log(counter());//3

  function f() {
    let value = 123;
  
    return function() {
      console.log(value++);
    }
  }
  
  let g = f()
  g();//123
  g();//124
  g();//125
  g();//126



  //Tasks
  //q1->Does a function pickup latest changes?
  let fname = "John";

function sayHi() {
  console.log("Hi, " + fname);
}

fname = "Pete";

sayHi();//pete
//task 2
//Which variables are available?
function makeWorker() {
  let name = "Pete";

  return function() {
    console.log(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // what will it show?//pete
//task 3
//Are counters independent?

let counter2 = makeCounter();

console.log( counter() ); // 4
console.log( counter() ); // 5 coz called earlier

console.log( counter2() ); // 0
console.log( counter2() ); // 1
//task4 Counter object
function fun1() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let cou = new fun1();

console.log( cou.up() ); // 1
console.log( cou.up() ); // 2
console.log( cou.down() ); // 1
//task 6 Function in if
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi();
//task 5
function sum(a){
  return function(b){
    return a+b;
  }
}
console.log(sum(1)(2))
console.log(sum(5)(-1))
//task 6
//let x = 1;

// function func() {
//   console.log(x); // ?

//   let x = 2;
// }

// func();gives error
let x = 1;

function func() {
  console.log(x); // ?

  //let x = 2;
}

func();//works fine
//task 7
//Filter through function
let arr = [1, 2, 3, 4, 5, 6, 7];
function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}
function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
}

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

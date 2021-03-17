//syntax
//obj instanceof class_name -> returns true if the obj belongs to class_name or inherited from class_name
class Rabbit {}
let rabbit = new Rabbit();

// is it an object of Rabbit class?
console.log( rabbit instanceof Rabbit );
// instead of class
function Rabbit1() {}

console.log( new Rabbit1() instanceof Rabbit1 ); // true
let arr = [1, 2, 3];
console.log( arr instanceof Array ); // true
console.log( arr instanceof Object );
//task Strange instanceof
function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

console.log( a instanceof B );
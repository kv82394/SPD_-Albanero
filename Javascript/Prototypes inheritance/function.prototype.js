// let animal = {
//     eats: true
//   };
  
//   function Rabbit(name) {
//     this.name = name;
//   }
  
//   Rabbit.prototype = animal;
  
//   let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
  
//   console.log( rabbit.eats );
  function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

console.log( rabbit.eats );
function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

console.log( Rabbit.prototype.constructor == Rabbit );
function Rabbit(name) {
  this.name = name;
  alert(name);
}

let rabbit = new Rabbit("White Rabbit");

let rabbit2 = new rabbit.constructor("Black Rabbit");
//task 1 

//Changing "prototype"
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};//true
Rabbit.prototype.eats = false;//false
delete rabbit.eats;//true
delete Rabbit.prototype.eats;//undefined

alert( rabbit.eats ); // ?

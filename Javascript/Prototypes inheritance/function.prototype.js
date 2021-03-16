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

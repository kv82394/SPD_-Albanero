let animal = {
    canEat : true,
    walk : function (){
        console.log("can walk")
    }
}
let rabit = {
    canWalk : true,
}
rabit.__proto__ = animal;
rabit.walk();
let person = {
    canWalk : true,
    walk : function(){
        console.log("can walk")
    }
};
let human = {
    hasHumanity : true,
    __proto__:person
};
human.walk();
//proto has no effect on this
animal = {
    walk() {
      if (!this.isSleeping) {
        alert(`I walk`);
      }
    },
    sleep() {
      this.isSleeping = true;
    }
  };
  
  rabbit = {
    name: "White Rabbit",
    __proto__: animal
  };
  
  // modifies rabbit.isSleeping
  rabbit.sleep();
  
  console.log(rabbit.isSleeping); // true
  console.log(animal.isSleeping); //undefined


  //task 1 Working with prototype

  animal = {
    jumps: null
  };
  rabbit = {
    __proto__: animal,
    jumps: true
  };
  
  console.log( rabbit.jumps ); // true
  
  delete rabbit.jumps;
  
  console.log( rabbit.jumps ); //null 
  
  delete animal.jumps;
  
  console.log( rabbit.jumps ); // undef


  //task 2 Searching algorithm
  let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__ : head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__:table
  };
  
  let pockets = {
    money: 2000,
    __proto__:bed
  };
  console.log(pockets.glasses)
  //task 
  //Why are both hamsters full?
  let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    stomach: [],
    __proto__: hamster
  };
  
  let lazy = {
    stomach: [],
    __proto__: hamster
  };
  
  // This one found the food
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // This one also has it, why? fix please.
  console.log( lazy.stomach ); // apple fixed

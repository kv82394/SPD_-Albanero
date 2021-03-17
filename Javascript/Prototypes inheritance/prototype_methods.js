let animal = {
    eats: true
  };
  
  // create a new object with animal as a prototype
  let rabbit = Object.create(animal);
  
  console.log(rabbit.eats); // true
  
  console.log(Object.getPrototypeOf(rabbit) === animal); // true
  
  Object.setPrototypeOf(rabbit, {});
  //Object.create has an optional second argument: property descriptors. We can provide additional properties to the new object there, like this:
  animal = {
    eats: true
  };
  
  let rabbit1 = Object.create(animal, {
    jumps: {
      value: true
    }
  });
  
  console.log(rabbit1.jumps);// true
    
  console.log(rabbit1.eats); //also true
  //Add toString to the dictionary
  let dictionary = Object.create(null, {
    toString: { // define toString property
      value() { // the value is a function
        return Object.keys(this).join();
      }
    }
  });
  dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for(let key in dictionary) {
    console.log(key); // "apple", then "__proto__"
}

// your toString in action
console.log(dictionary); // "apple,__proto__"
//The difference between calls
function Rabbit2(name) {
    this.name = name;
  }
  Rabbit2.prototype.sayHi = function() {
    console.log(this.name);
  };
  
  let rabbit01 = new Rabbit2("Rabbit");
  rabbit01.sayHi();
Rabbit2.prototype.sayHi();//undef
Object.getPrototypeOf(rabbit01).sayHi();//undef
rabbit01.__proto__.sayHi();//undef
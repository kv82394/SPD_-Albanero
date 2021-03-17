class user {
    constructor(name){
        this.name = name;

    }
    sayHi(){
        console.log(this.name);
    }
}
let u1 = new user("vivek")
u1.sayHi()
console.log(typeof user)
console.log(user===user.prototype.constructor)
console.log(user.prototype.sayHi)
class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
  }
  
  // class is a function
  console.log(typeof User); // function
  console.log(User === User.prototype.constructor); // true
  
  // The methods are in User.prototype, e.g:
  console.log(User.prototype.sayHi); // alert(this.name);
  
  // there are exactly two methods in the prototype
  console.log(Object.getOwnPropertyNames(User.prototype));
  class person {
      constructor(name){
          this.name = name;//invoke setter
      }
      get name(){
          return this.name1;
      }
      set name(val){
          if (val.length<4){
              console.log("name is too short");
          }
          this.name1 = val;
      }

  }
  let p1 = new person("vivek");
  console.log(p1.name);
  p1 = new person("")

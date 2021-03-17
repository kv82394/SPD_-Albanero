// class tiger {
//     constructor(name){
//         this.speed = 0;
//         this.name = name;
//     }
//     run(speed){
//         this.speed= speed;
//         console.log(`${this.name} runs at ${this.speed}`);

//     }
//     stop(){
//         this.speed= 0;
//         console.log(`${this.name} is still`)
//     }

// }
// let t1 = new tiger("bengal tigar");
// t1.run(90)
// console.log(t1.stop());
class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      console.log(`${this.name} stands still.`);
    }
  }
  
  let animal = new Animal("My animal");
//   class Rabbit extends Animal{
//       hide(){
//           console.log(`${this.name} hides!!`);
//       }
//   }
//   let rabbit = new Rabbit('white rabbit');
//   rabbit.hide()
//   rabbit.run(56)
//   rabbit.hide()
//   rabbit.stop()
  class Rabbit extends Animal{
      hide(){
          console.log(`${this.name} hides!!`);
      }
      stop(){
          super.stop();
          this.hide();
      }
  }
  let rabbit = new Rabbit('white rabbit');
    rabbit.hide()
  rabbit.stop()
  //Arrow functions have no super
  //Overriding constructor
class Mouse extends Animal{
    constructor(name,earlen){
        super(name);
        this.earlen = earlen;
    }
    hide(){
        console.log(`${this.name} hides!!`);
    }
    stop(){
        super.stop();
        this.hide();
    }
    showearlen(){
        console.log(`${this.name} has ${this.earlen}cm of ear length`);
    }

}
let m1 = new Mouse("mickey",2)
m1.run(20);
m1.stop();
m1.showearlen()

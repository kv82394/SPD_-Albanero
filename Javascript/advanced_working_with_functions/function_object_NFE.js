function sum(){}
console.log(sum.name)
let user = {

    sayHi() {
      // ...
    },
  
    sayBye: function() {
      // ...
    }
  
  }
  
  console.log(user.sayHi.name);
  console.log(user.sayBye.name);
  function fun(a,b){}
  function fun1(){}
  function fun2(a,b,...args){}
  console.log(fun.length)
  console.log(fun1.length)
  console.log(fun2.length)


  //custom properties
function fun3(){
    fun3.x++;
    console.log(fun3.x);
};
fun3.x = 0;
fun3()


let sayHi = function func(who) {
    if (who) {
      console.log(`Hello, ${who}`);
    } else {
      func("Guest"); // use func to re-call itself only can call within its own function
    }
  };
  
  sayHi();

  //task 1 Set and decrease for counter
  function makeCounter() {
    let x = 0;
  
    function counter() {
      return x++;
    }
  
    counter.set = function(value){x = value} 
  
    counter.decrease = function(){x--}
  
    return x;
  }
  console.log(makeCounter(5));


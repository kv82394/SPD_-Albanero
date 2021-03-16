function slow_fun(x) {
    console.log(x);
    return x;
  }
  
  function cachingDecorator(func) {
    let cache = new Map();
  
    return function(x) {
      if (cache.has(x)) {   
        return cache.get(x);
      }
  
      let result = func(x); 
  
      cache.set(x, result);
      return result;
    };
  }
  
  slow_fun = cachingDecorator(slow_fun);
  
  console.log( slow_fun(1) );//runs slow function
  console.log( "Again: " + slow_fun(1) );//give ans from cache


  //Using “func.call” for the context
  let worker = {
    someMethod() {
      return 1;
    },
  
    slow(x) {
        console.log("Called with " + x);
      return x * this.someMethod();
    }
  };
  

  function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
      if (cache.has(x)) {
        return cache.get(x);
      }
      let result = func(x); 
      cache.set(x, result);
      return result;
    };
  }
  
  console.log( worker.slow(1) );
  worker.slow = cachingDecorator(worker.slow);
  //alert( worker.slow(2) );  gives erroer


  //for multiple argument we can convert argument as string which is further stored as map key
//Borrowing a method for better hasing optimised
function hash() {
    console.log( [].join.call(arguments) ); // 1,2
  }
  
  hash(1, 2);
  //task 1
  //Spy decorator
  function work(a, b) {
    console.log( a + b ); // work is an arbitrary function or method
  }
  function spy(func) {

    function wrapper(...args) {
      // using ...args instead of arguments to store "real" array in wrapper.calls
      wrapper.calls.push(args);
      return func.apply(this, args);
    }
  
    wrapper.calls = [];
  
    return wrapper;
  }
  
  work = spy(work);
  
  work(1, 2); // 3
  work(4, 5); // 9
  
  for (let args of work.calls) {
    console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
  }
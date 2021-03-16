//syntax
//let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
function sayHi() {
    console.log('Hello');
  }
  
  setTimeout(sayHi, 1000);
  //With arguments:
  function sayHi(phrase, who) {
    console.log( phrase + ', ' + who );
  }
  
  setTimeout(sayHi, 1000, "Hello", "John"); 
  //Canceling with clearTimeout
  //syntax
  //let timerId = setTimeout(...);
  //clearTimeout(timerId);
  let timerId = setTimeout(() => alert("never hhappens"), 1000);
  console.log(timerId);


clearTimeout(timerId);
console.log(timerId);
//setInterval
//syntaxlet timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
let timerId = setInterval(() => alert('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);




//Zero delay setTimeout
setTimeout(() => alert("World"));

alert("Hello");
let sum = new Function('a', 'b', 'return a + b');
console.log( sum(1, 2))
let printmsg = new Function('msg','console.log(`hello ${msg}`)');
printmsg('vivek')
let str = "'msg','for(let i in msg){console.log(msg);}'"//8709699593
let printchar = new Function(str);
printchar('vivek')
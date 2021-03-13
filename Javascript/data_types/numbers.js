let x = 1_0_5525_1;
console.log(x+1);// it works
x = 1e3;
console.log(x+1);
x = 1e-3;
console.log(x);
x = 0b111;
let y = 0xff;
let z = 0o377;
console.log(x,y,z);
x = z.toString(2);
y = y.toString(8);
z = z.toString(16);
console.log(x,y,z);
console.log(7..toString(2));//we use .. if we calling the function by no or string
x = 5.26
y = 5.56
console.log("ceil :",Math.ceil(x))
console.log("floor :",Math.floor(x))
console.log("round : ",Math.round(x))
console.log("round : ",Math.round(y))
console.log("trunc : ",Math.trunc(y))








console.log(.1 + .2 == .3)
console.log(0.1+0.2)


//isNaN isFinite
x = "hgkf"
console.log(isNaN(x))//true its not a number
console.log(isNaN("256"))//false its not a no.
console.log(isNaN(256))//false its not a no.


console.log(isFinite(x))//false
console.log(isFinite("256"))//true
console.log(isFinite(256))//true


console.log( parseInt('100px') ); // 100
console.log( parseFloat('12.5em') ); // 12.5

console.log( parseInt('12.3') ); // 12, only the integer part is returned
console.log( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

console.log( parseFloat('ssf12.3.4') );
//The second argument of parseInt(str, radix)
console.log( parseInt('12.3',2) );//1 conside only binary


console.log( Math.random() ); // 0.1234567894322

console.log( Math.max(3, 5, -10, 0, 1) ); //5
console.log( Math.min(1, 2) ); // 1

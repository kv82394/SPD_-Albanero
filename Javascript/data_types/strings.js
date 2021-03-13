let guestList = `Guests:
John Pete
 Mary
`;

console.log(guestList);
let guestList1 = "Guests:\n * John\n * Pete\n * Mary";
console.log(guestList1);
console.log(guestList1[1]);
console.log(guestList.charAt(0));

let str = "Hello i am vivek what your name vivek";
console.log(str.indexOf('vivek'))
console.log(str.indexOf('vivek',12))//searched after 12th caracter
console.log(str.lastIndexOf('vivek',20))//




//includes, startsWith, endsWith
console.log(str.includes("at"))//true
console.log(str.startsWith("at"))//false
console.log(str.startsWith("Hello"))//true
console.log(str.endsWith("ek"))//true




//There are 3 methods in JavaScript to get a substring: substring, substr and slice.
console.log(str.slice(0,5))
console.log(str.slice(4))//4th index till last
console.log(str.slice(-4,-1))//exclude 4th index from last to 1st index from last
console.log(str.substring(0,5))
console.log( "z".codePointAt(0) ); // 122
console.log( "Z".codePointAt(0) );//90
console.log( String.fromCodePoint(90) );
console.log( 'Österreich'.localeCompare('Zealand') );

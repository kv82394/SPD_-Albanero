//result = (a !== null && a !== undefined) ? a : b;
let x 
result = (x ?? "x is undefined or null" )
console.log(result)
//we can also use ||
let y
let z = null
let l = 2
console.log(y || z || l)
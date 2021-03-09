let val = true
console.log(val)
console.log(typeof(val))
val = String(val)// capital S when writing string
console.log(typeof(val))
val = 1
console.log(typeof(val))
val = String(val)// capital S when writing string
console.log(typeof(val))


// Numeric Conversion
val = "123"
val = Number(val)
console.log(typeof val)
val = "                         123                   "
val = Number(val)
console.log(typeof val)
//implicit type conversion
console.log("5"/"5")
console.log("5"/5)
console.log(Boolean('0'))
// The three most widely used type conversions are to string, to number, and to boolean.

// String Conversion – Occurs when we output something. Can be performed with String(value). The conversion to string is usually obvious for primitive values.

// Numeric Conversion – Occurs in math operations. Can be performed with Number(value).
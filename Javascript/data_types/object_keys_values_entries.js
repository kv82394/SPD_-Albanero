let user = {
    name: "John",
    age: 30
  };
arr = Object.keys(user);
console.log(arr)
arr = Object.values(user);
console.log(arr)
arr = Object.entries(user);
console.log(arr)
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
  
    return sum; // 650
  }
  console.log( sumSalaries(salaries) ); // 650
  
 user = {
    name: 'John',
    age: 30
  };
 function count(user) {
     let arr = Object.keys(user);
     return arr.length;
 }
  console.log( count(user) ); // 2

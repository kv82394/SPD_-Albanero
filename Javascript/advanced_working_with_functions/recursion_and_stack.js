//Sum all numbers till the given one

function calSum(n){
    if (n==1)return 1;
    let sum = n + calSum(n-1);
    return sum;
}
console.log(calSum(10))
//Calculate factorial
function calFact(n){
    if (n==1)return 1;
    return n* calFact(n-1);
}
console.log(calFact(5))
//Fibonacci numbers
function fibno(n){
    if (n<=1){
        return n;
    }
    return fibno(n-1) + fibno(n-2);
}
console.log(fibno(5))
//Output a single-linked list
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  let curr_val = list;
  while(curr_val){
      console.log(curr_val.value);
      curr_val = curr_val.next;

  }
  //Output a single-linked list in the reverse order
  function revll(list){
      if (list.next){
          revll(list.next);
          
      }
      console.log(list.value);
  }
  revll(list);

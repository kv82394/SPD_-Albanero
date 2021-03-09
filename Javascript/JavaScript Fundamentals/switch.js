let arg = 3//this can't be implicit typecasted
switch (arg) {
  case '0':
  case '1':
    console.log( 'One or zero' );
    break;

  case '2':
    console.log( 'Two' );
    break;

  case 3:
    console.log( 'Never executes!' );
    break;
  default:
    console.log( 'An unknown value' );
}
let x = 9
switch(x){
    case 1:
        console.log("one");
        break;
    case 2:
    case 9:
        console.log("two and nine")
        break
    default:
        console.log("none of the above")
}
//task
// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }
let a = 3
switch(a){
    case 0:
        console.log(0)
        break;
    case 1:
        console.log(1)
        break;
    case 2:
    case 3:
        console.log(2,3)
        break
}

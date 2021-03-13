//deleting value from middle
let arr = ["bihar","gugrat","assam","orrisa","canada","chine"];
console.log("before splicing :",arr);
arr.splice(1,2);
console.log("after splicing :",arr);
//Negative indexes allowed in splicing and can be used for inserting the values
arr = [1,2,3,6,7,8];
arr.splice(-3,0,4,5);
console.log(arr)



// arr.slice(start,end);     [start,end)
console.log(arr.slice(0,3));//return slicing part
let arr1 = [9,10];
arr1 = arr.concat(arr1);//concatinate to original array and return also 
console.log(arr);
console.log(arr1);
arr.forEach(function(item,index,array){
    console.log(`index is ${index} and its value is ${item}`);
});


//searching  indexOf(item,from)  lastIndexOf(item,from)  includes(item,from)
arr = ["bihar","gugrat","assam","orrisa","canada","chine","bihar"];
console.log(arr.indexOf("bihar"));//return index of found value
console.log(arr.indexOf("biharm"))//-1 if not found
console.log(arr.indexOf("bihar",0));//0
console.log(arr.indexOf("bihar",1));//6
console.log(arr.lastIndexOf("bihar"));//6 search from backside
console.log(arr.lastIndexOf("bihar",3));//start searching back from index 3
console.log(arr.includes("bihar"));//true
let res = arr.find(function(item,index,array){
    if (item == "canada") return item;
})
console.log(res) // if true is returned, item is returned and iteration is stopped
// for falsy scenario returns undefined
// we have filter which run for whole array wheather it finds or not
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  let selected_user = users.filter(function(item,index,array){
     console.log(item)
  });
  selected_user = users.filter(function(item,index,array){
    if (item.id<3) return true
 });
 console.log(selected_user);
 //reduce
arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current,0);//0 is optional

console.log(result); // 15

let str = "test";

console.log( str.split('') ); // t,e,s,t
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  
 arr = [ 1, 2, 15 ];
  
  arr.sort(compareNumeric);
  
  console.log(arr);  // 1, 2, 15

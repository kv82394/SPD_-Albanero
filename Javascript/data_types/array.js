let arr = [];
arr = [1,2,3]
console.log(arr)
let arr1 = new Array()
arr1[0] = "apple"
arr1[1] = {
    fname : "vivek",
    roll : "68"
};
arr1[2] = function(a,b){
    console.log(a+b);
}
console.log(arr1[0])
console.log(arr1[1])
console.log(arr1[1]["roll"])
arr.push(65);
console.log(arr)
arr.pop();
console.log(arr)
arr.unshift(23)
console.log(arr)
arr.shift(23)
console.log(arr)
arr['index'] = 9
console.log(arr,arr['index'])
for (let i = 0 ;i< arr.length;i++){
    console.log(arr[i]);
}
for (let key of arr){
    console.log(key);
}

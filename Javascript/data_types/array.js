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
let arr2 = [
    {    x : 1,
        y : 2,
        z : 3
    },
    {
        gf:98,
        gfu : 86
    }

];
console.log("length of arr2 : ",arr2.length)
for (let key of arr2){
    for (subkey in key){
        console.log(subkey,key[subkey])
    }
}
for (let i = 0;i<arr2.length;i++){
    console.log(arr2[i]);
}
console.log(arr2[0]['x'])
let user = {
    fname : "vivek",
    age : 22,
    roll : 76
}
for (key in user){
    console.log(key,user[key])
}

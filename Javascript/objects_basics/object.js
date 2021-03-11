let student = {
    my_name : "vivek",
    roll : 2548,
    branch : "CSE",
}
let x = "my_name"
console.log(student["my_name"])
console.log(student[x])
let stu_cpy = student
stu_cpy[x] = "Ram"
console.log(student[x])
student["isAdmin"] = true
console.log("isAdmin" in student)
delete stu_cpy.isAdmin
console.log("isAdmin" in student)
console.log(stu_cpy.my_name)
let str = "vivek"
student["isAvailable" + str] = true
console.log(student.isAvailablevivek)
console.log(student.xyz===undefined)
let user = {
    val : undefined,
};
console.log(user.x===undefined)
for (let key in student){
    console.log(key,"->",student[key]);
}
let cou_code = {
    2 : "america",
    5 : "japan",
    1 : "india",
    3 : "nepal",
    4 : "switzerland",
}
for (let key in cou_code){
    console.log(key,"->",cou_code[key]);
}
let cou_code_ns = {
    "+2" : "america",
    "+5" : "japan",
    "+1" : "india",
    "+3" : "nepal",
    "+4" : "switzerland",
}
for (let key in cou_code){
    console.log(+key);
}
delete user

let task = {
    f_name : "john",
    l_name : "smith",
}
task["f_name"] = "pete"
delete task["f_name"]
//task2 sum of objects
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
let sum = 0
for (let val in salaries){
     sum += salaries[val];
}
console.log(sum)
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

for (let val in menu){
     if (typeof (menu[val]) != "string"){
         menu[val] = 2 * menu[val]
     }
}
for (let val in menu){
    console.log(val , menu[val]);
}


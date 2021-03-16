let usr = {
    fname: "vivek",
    age : 34
};
let desc = Object.getOwnPropertyDescriptor(usr,'fname');
console.log(JSON.stringify(desc))
Object.defineProperty(usr, "gender", {
    value : "m",
    writable : false
  });
desc = Object.getOwnPropertyDescriptor(usr,'gender');
console.log(JSON.stringify(desc))
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(usr));
console.log(JSON.stringify(clone))

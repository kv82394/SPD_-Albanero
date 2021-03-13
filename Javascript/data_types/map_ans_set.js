let m = new Map()
m.set("a",56)
m.set("b",65);
m.set('c',65);
console.log(m.get('a'))
console.log(m.has("a"))
m.delete('c')
console.log(m,m.size)
//iteration over map
for(let ch of m.keys()){
    console.log(ch,m[ch])
}
for(let ch of m.values()){
    console.log(ch,m[ch])
}
for(let ch of m.entries()){
    console.log(ch)
}

// map from object
let obj = {
    name: "John",
    age: 30
  };
  
  let map = new Map(Object.entries(obj));
  
  console.log( map.get('name') ); // John
//Object.fromEntries: Object from Map
let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);
  
  // now prices = { banana: 1, orange: 2, meat: 4 }
  
  console.log(prices.orange); // 2
  let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
console.log( set.size ); // 3

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}

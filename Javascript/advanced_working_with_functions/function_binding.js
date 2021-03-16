let c1 = {
    x :2,
    y : 3
}
let c2 = {
    x :76,
    y :98
}
function show(){
    console.log(`${this.x} ${this.y}`);
}
let c1_fun = show.bind(c1);
c1_fun();
let c2_fun = show.bind(c2);
c2_fun();
class person{
    private_space = "private";
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
}
let p1 = new person("vivek");
console.log(p1.name)
p1.private_space = "public";
console.log(p1);//any one can make private things to public
class special_person{
    #private_space = "private space";
    constructor (name){
        this._name = name;
    }
    change_space(msg){
        this.#private_space = msg;
    }
}
let p2 = new special_person("vivek");
p2.change_space("public")
console.log(p2)//private space cant be visible from outside
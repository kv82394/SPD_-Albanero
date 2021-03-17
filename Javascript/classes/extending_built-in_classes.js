class myarray extends Array{
    is_lucky(){
        for (let x of this){
            for (let i in x){
                if (i==5)return true;
            }
        }
        return false;
    }
}
let arr = [1,2,3,6,8,5,6];
let imroved_array = new myarray(arr)
console.log(imroved_array.is_lucky())
//No static inheritance in built-ins
//tasks
//output even no on loop
let x = 0;
while(x<=10){
    if (x%2==0)console.log(x)
    x++;
}
//replace while for
for (let i = 0 ;i<=10;i+=2){
    console.log(`number ${i}`)
}
//output prime number
x = 100
function isPrime(n){
    if (n==2)return true;
    for (let i= 2;i<Math.sqrt(n);i++){
        if (n%i==0)return false;
    }
    return true;

}
for (let i = 2;i<=100;i++){
    if (isPrime(i)){
        console.log(i);
    }
}

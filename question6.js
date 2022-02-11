let n = 371;
let sum = 0;
let a = n.toString().split('');
console.log(a)

for(let i = 0; i < a.length; i++){
    sum = sum + Math.pow(a[i], 3)
}
if( sum == n){
    console.log("armstorng")
}else{
    console.log("not a armstorng")
}
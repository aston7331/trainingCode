let n=6;
let string="";
let count = 0;

for(let i=1; i<=n; i++){
    for(let j=1; j< i; j++){
       string += String.fromCharCode(count + 65);
        count++;
    }
    string +="\n";
}
console.log(string);

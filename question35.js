let n=5;
let string="";
let count = 0;

for(let i=1; i<=n; i++){
    for(let k=1; k<=n-i; k++){
        string +=" ";
    }
    for(let j=1; j<=i; j++){
       string += String.fromCharCode(count + 65);
        count++;
    }
    string +="\n";
}
console.log(string);

let n=5;
let string ="";
let count =0;

for(let i=0; i<=n; i++){
    for(let j=0; j<i; j++){
        string += " ";
    }
    for(let k=1; k<=n-i; k++){
        string += String.fromCharCode(count + 65);
        count++;
    }
    string += "\n";
}
console.log(string);
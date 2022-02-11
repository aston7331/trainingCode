let n=5;
let string ="";


for(let i=0; i<=n; i++){
    for(let j=1; j<=i; j++){
        string += " ";
    }
    for(let k=1; k<=n-i; k++){
        string += String.fromCharCode(i  + 65)
    }
    string += "\n";
}
console.log(string);
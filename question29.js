let n =5;
let string = "";

for(let i=1; i<=n; i++){
    for(let j=1; j<=i-1; j++){
        string += " ";
    }
    for(let k=1; k<=n-i+1; k++){
        string += n-k-i+2;
    }
    string += "\n";
}
console.log(string);
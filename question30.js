let n =6;
let string ="";

for(let i=1; i<=n; i++){
    // for(let j=1; j<=n-1; j++){
    //     string += " ";
    // }
    for(let k=1; k<=i; k++){
        string +=i-k+"";
    }
    string += "\n";
}

console.log(string);
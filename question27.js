let n=5;
let string ="";
let count = 1;

for(let i=1; i<=n; i++){
    for(let j=1; j<=n-i; j++){
        string += "  ";
    }
    for(let k=1; k<=i; k++){
       // string += k+ "" + " ";
        string += count;
        string += "  ";
        count++;
    }
    string += "\n";
}
console.log(string);
let n=7;
let string ="";
count =0;

for(let i=1; i<=n; i++){
    for(let j=1; j<=n-i; j++){
        string += "  ";
    }
    for(let k=1; k<=2*i-1; k++){
        alpha = String.fromCharCode(count + 65);
        string += " " + alpha;
        count++;
        if(alpha =="Z"){
            count=0;
        }

        }
    string += "\n";
}
console.log(string);
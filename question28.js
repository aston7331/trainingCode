let n =5;
let string ="";
let k =1;

for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){
        if(k%2 == 0){
            string +="0";
        }else{
            string += "1";
        }
        k++;
        
    }
    string += "\n";
}
console.log(string);
let n = 5;
let string = "";

for( let i = 1; i <= n; i++){
    

  for( let j = 1; j <= n-1; j++){
    string += " ";
   }
   for( let h = 0; h < 2*i-1; h++){
    string += "*";
   }
   string += "\n";
}
console.log(string);
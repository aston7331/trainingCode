let n = 7;
let string = "";

for( let i = 1; i <= n; i++){

   for( let h = 0; h < 2*i-1; h++){
    string += " *";
   }
   string += "\n";
}
console.log(string);
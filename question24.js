let n =5;
let string ="";
 for(i =1; i <=5; i++){
     for(let k=1; k<=n-i; k++){
         string +=" ";
     }
 for(j=1; j<=i; j++){
     if(j%2 == 1){
         string += "0";
     }else{
         string += "1";
     }
 }
     string += "\n";
 }
 console.log(string);
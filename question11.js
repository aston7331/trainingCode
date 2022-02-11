function factorial(num){
    let result =1;
     for( let i =num; i > 0; i--){
         result = result * i;

         console.log(result)
     }
}factorial(5)
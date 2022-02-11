const fibonacci= (num) => 
{
    let arr = [];
    for(let i = 0; i <= num; i++) 
    {
      if(i == 0 || i == 1)
      {
        arr[i] = i;
      }else
      {
        arr[i] = arr[i - 1] + arr[i - 2];
      }
    }
    return arr;
}
console.log(fibonacci(8)) 
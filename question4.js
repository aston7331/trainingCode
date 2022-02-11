function isprime(num)
{
    if (num <= 1) return false;
    if (num == 2) return true;

    for (let i = 2; i <= num / 2; i++)
    {
        if (num % i == 0)
        {
            return false;
        }
    }
    return true;
}


let  result=[];

for (let j = 1; j <= 40;j++){
if(isprime(j))
{
   result.push(j);
}
}

console.log(result);
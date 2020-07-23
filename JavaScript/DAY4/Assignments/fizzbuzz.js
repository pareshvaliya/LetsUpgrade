console.log("FizzBuzz");
for(let i=1;i<=100;i++)
{
    if(i%3 == 0 && i%5 == 0)
    {
        console.log(i);
        console.log("fizzbuzz");
        
    }
    else if(i%3 == 0)
    {
        console.log(i);
        console.log("fizz");
        
    }
    else if(i%5 == 0)
    {
        console.log(i);
        console.log("buzz");
    }
}
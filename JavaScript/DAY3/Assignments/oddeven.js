let num = Number(prompt("Enter a Number",-1));

let iseven = function(num)
{
    if(num % 2 == 0)
    {
        return true;
    }
    else{
        return false
    }
}

if(num >= 0)
{
    let result = iseven(num);
    if(result)
    {
        console.log(`The number entered is ${num} and Number is Even`);
    }
    else{
        console.log(`The number entered is ${num} and Number is Odd`);
    }
    
}
else{
    console.log("Please enter an valid number");
}
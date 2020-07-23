function prime(num)
{
    let arr = [];
    for(let n =2;n<=num;n++)
    {
        let flag = 1;
        for(let i=2;i<=Math.sqrt(n);i++)
        {
            if(n%i == 0)
            {
                flag = 0;
                break;
            }
        }
        if(flag)
        {
            arr.push(n);
        }
    }
    return arr;
}

let num = Number(prompt("enter a number",0));
if(num > 0)
{
    let arr = prime(num);
    console.log(`The Prime number between 2 to ${num} are ${arr}`);
}
else console.log("enter valid number");
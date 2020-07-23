let sales = 0;
while(sales ==0 || sales <=100)
{
    sales = Number(prompt("Enter the Sales you have done this year",0));
}

function reward(sales)
{
    if(sales > 20000) return 10;
    else if(sales>=10001 && sales<=20000) return 7;
    else if(sales>=5001 && sales<=10000) return 7;
    else return 2;
}


let re = reward(sales);
console.log(`Your have earned ${Math.round((re/100)*sales)} commission`);

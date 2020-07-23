let sales = Number(prompt("Enter the Sales you have done this year",0));

function reward(sales)
{
    if(sales > 20000) return 10;
    else if(sales>=10001 && sales<=20000) return 7;
    else if(sales>=5001 && sales<=10000) return 7;
    else return 2;
}

if(sales <=0) console.log("please enter valid sales");
else
{
    let re = reward(sales);
    console.log(`Your have earned ${Math.round((re/100)*sales)} commission`);
}

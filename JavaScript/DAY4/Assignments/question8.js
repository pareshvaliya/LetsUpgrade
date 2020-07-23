function ask(question, yes, no)
{
    if(confirm(question)) yes();
    else no();
}

ask("Do you agree?",
()=>{alert("You agreeed.");},
()=>{alert("You cancel the execution.");}
);
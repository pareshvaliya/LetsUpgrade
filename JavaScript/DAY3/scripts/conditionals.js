
// prompt gives in string
let age = Number(prompt("your age",0));

// or age = +prompt();

console.log(age, typeof(age));

if(age >= 18)
{
    console.log("Adult");
}
else if(age == 25)
{
    console.log("25");
}
else{
    console.log("Not Adult");
}


// Ternary operators

// condition ? value if true : if false


// Swith case

switch(age){
    case 18:
        console.log("you are 18");
        break;
    case 20:
        console.log("you are 20");
        break;
    default:
        console.log("Adult");
}
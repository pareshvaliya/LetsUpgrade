let marks = Number(prompt("Enter Marks",0));

// using if else
/*
if(marks >= 80)
{
    console.log(`Marks are ${marks} and the grade is A+`);
}
else if(marks >= 60)
{
    console.log(`Marks are ${marks} and the grade is A`);
}
else if(marks >= 35)
{
    console.log(`Marks are ${marks} and the grade is B`);
}
else{
    console.log("You are Fail...");
}
*/


// Using Ternary
let grade;
grade = marks >=80 ?'A+':(marks >=60 ?'A':(marks >=35?'B':0));
if(grade != 0)
{
    console.log(`Marks are ${marks} and the grade is ${grade}`);
}
else{
    console.log("You are Fail...");
}

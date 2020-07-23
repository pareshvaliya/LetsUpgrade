/*
function nameoffun()
{

}

*/

function hello()
{
    console.log("hello");
}

hello();

// assign fun to a variable
// Anonymous function(without name)
let greet = function(){
    console.log("greet");
}

greet();

let welcome = function(name){
    console.log(`Hello ${name}`);
}
welcome('Paresh');


let addition = function(num1 = 0,num2 = 0){
    let sum = +num1 + num2;
    return sum;
}

let result = addition('10',true);
console.log(result);
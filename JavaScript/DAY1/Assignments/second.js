//var
/*
Variables declared Globally (outside any function) have Global Scope.
Variables declared with the var keyword cannot have Block Scope.
Variables declared inside a block {} can be accessed from outside the block.
*/
{
    var x = 2;
}
// var can be accesible from any where 
console.log(x);
/*
Redeclaring a variable using the var keyword can impose problems.
Redeclaring a variable inside a block will also redeclare the variable outside the block:
*/
var z=3;
{
    // it is not a new variable it is same as z declared above
    var z=10; // it overwrites the actual z variable
}
console.log(z);


//Let
/*
This keyword provide Block Scope variables in JavaScript.
Variables declared with the let keyword can have Block Scope.
Variables declared inside a block {} cannot be accessed from outside the block:
*/
{
    let y = 2;
}
console.log(y); // it will give an error
// y can NOT be used here

/*
Redeclaring a variable using the let keyword can solve above problem.
Redeclaring a variable inside a block will not redeclare the variable outside the block:
*/
var p = 10;
// Here p is 10
{
  let p = 2; // it creates a new p variable whose scope is within this bolck only
  // Here p is 2
}
// Here p is 10
console.log(p)


// Variables declared with var and let are quite similar when declared outside a block.
// They will both have Global Scope:



//const
/*
This keyword provide constants in JavaScript.
Variables defined with const behave like let variables, except they cannot be reassigned:
JavaScript const variables must be assigned a value when they are declared:
*/
const PI = 3.14;
PI = 3;      // This will give an error
PI = PI + 10;   // This will also give an error
/*
Declaring a variable with const is similar to let when it comes to Block Scope.
It does NOT define a constant value. It defines a constant reference to a value.
Because of this, we cannot change constant primitive values, but we can change the properties of constant objects.
*/
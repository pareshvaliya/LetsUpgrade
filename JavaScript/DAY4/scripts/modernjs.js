console.log("Modern Javascript");

// Destructuring Objects
// object inside object

let person = {
    name : 'paresh',
    age : 24,
    address : {
        city : 'Mumbai',
        lane : 2,
    },
}
console.log(person.age);
console.log(person.address.city);

// name and age are extracted in name and age variable
const {name , age, address:{lane}} = person; // or you can use let
console.log(name,age,lane);

// Destructuring Arrays
let arr = ['paresh','kumar','valiya'];

let [fname,ex] = arr;
console.log(fname,ex);


// Spread Operator

let frnds = ['haresh','paresh','rahul'];
// let bestfrnd = frnds;  // only refrence is copied
// both ref points to the same object

// using spread operator
let bestfrnd = [...frnds]; // now the whole array is copied
frnds.push('abc');
console.log(frnds);
console.log(bestfrnd);


// // Spread Operator in objects

let per = {
    name : 'paresh',
    age : 24,
    city : 'Mumbai',
}

let emp = {
    ...per,// all element of per is copied in this
    sal : 40000,
    post : 'manager',
}

console.log(per);
console.log(emp);




// let add = function(num1 , num2)
// {
//     return num1+num2;
// }
// let result = add(10,20);


// Arrow Functions
// (param)=>execute and then return the value
let add = (num1,num2) => num1+num2;
let result = add(10,20);
console.log(result);


let greet = (name)=>`welcome ${name}`;

let log = greet('Paresh');
console.log(log);


let abc = ()=> {
    console.log("Hello");
    console.log("paresh");
}

abc();








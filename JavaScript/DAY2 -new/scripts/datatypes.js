console.log("datatypes");

/* 
Primitive
*/
//Number

let num = 25;
console.log(num);

// String
//let str = "Paresh";
let str = `Hey`
console.log(str);

//Boolean
let canDrive = false;
console.log(canDrive);

//Bigint
let num2 = 12344n;
console.log(num2);

//null
let n = null;
console.log(n);
console.log(typeof(n));

//undefined
//let a;
let a = undefined;
console.log(a);


//Type conversion
let str2 = '500';
console.log(typeof(str2));
console.log(Number(str2));

let num1 = 100;
console.log(String(num1));
console.log(Number(false));
console.log(String(false));

let num3 = 123.456;
console.log(num3.toFixed(2));
console.log(parseInt(num3));

console.log(parseFloat(num1));
let str3 = '123abc';
console.log(Number(str3));//gives NaN that is not a number

let strnum =  '1234hello33';
console.log(Number(strnum));// gives NaN
console.log(parseInt(strnum));// takes number 1234 


/*
Reference
 */

//Array

let arr = ['one','two',1,2];
console.log(arr);
console.log(Array.isArray(arr));
console.log(arr.reverse());//reverse and stored in original
console.log(arr[2]);

let arr2 = [2,3,4];

console.log(arr.concat(arr2));

//Appending
// at start
arr2.unshift('one');
console.log(arr2);
// at end
arr2.push('last');
console.log(arr2);


// Remove
arr2.shift('one');
console.log(arr2);
arr2.pop();
console.log(arr2);
arr2.pop();
console.log(arr2);


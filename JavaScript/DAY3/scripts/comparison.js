// Comparison and Logical

// Comparison
/* ==,
 === Strict equality(checks types and value)
 != , !== , < , >
*/
console.log(5 > 6);
console.log(5 < 6);

let num = 9;
console.log(num >= 6);

console.log(1 == [1]);//true
console.log(1 == 1);
console.log(1 === [1]);//false

console.log( 1 === '1');//false
console.log(1 !== '1');//true
// console.log(true == 'true');


//String comparison
//Lexicographical

console.log('abc'>'abcd');


//null
// > , < converts everythong in number and then compare
console.log(null == 0);
console.log(null < 0);
console.log(null > 0);//false
console.log(null >= 0);//true(0>=0)
console.log(Number(null));


//undefined
console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);//false
console.log(undefined >= 0);//true(0>=0)
console.log(Number(undefined));

// Logical 
// && ||
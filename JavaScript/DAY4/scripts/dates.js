console.log("Date");

// initialize the date
let today  = new Date();
console.log(today);

// today = new Date(2012,5,12,11,20,5,0);
// console.log(today);

console.log(today.toDateString());
console.log(today.toString());
// returns millisec from jan 1 1970
console.log(today.getTime());
console.log(today.getDate());

console.log(today.setDate(18));
console.log(today);


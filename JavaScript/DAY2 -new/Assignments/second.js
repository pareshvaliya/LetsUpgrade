// STRING METHODS
var str = "Hey Paresh how are you ?";
// The length property returns the length of a string:
console.log(str.length);

// The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
console.log(str.indexOf('a'));

// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
console.log(str.lastIndexOf('a'));

// The search() method searches a string for a specified value and returns the position of the match:
console.log(str.search('Paresh'));

// slice() extracts a part of a string and returns the extracted part in a new string.
console.log(str.slice(7,13));

// substring() is similar to slice().
// The difference is that substring() cannot accept negative indexes.
console.log(str.substring(7,13));

// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.
console.log(str.substr(7,8));

// The replace() method replaces a specified value with another value in a string:
console.log(str.replace('Hey','Hello,'));

// A string is converted to upper case with toUpperCase():
console.log(str.toUpperCase());

// A string is converted to lower case with toLowerCase():
console.log(str.toLowerCase());

// concat() joins two or more strings:
console.log(str.concat(" Fine"));

// The trim() method removes whitespace from both sides of a string:
let text = " Paresh ";
console.log(text);
console.log(text.trim());

// The charAt() method returns the character at a specified index (position) in a string:
console.log(str.charAt("5"));

// The charCodeAt() method returns the unicode of the character at a specified index in a string:
console.log(str.charCodeAt(5));

// A string can be converted to an array with the split() method:
console.log(str.split(" "));





// ARRAY METHODS
var arr = ['paresh','valiya',24,[1,2,3]]

// The JavaScript method toString() converts an array to a string of (comma separated) array values.
console.log(arr.toString());

// The join() method also joins all array elements into a string.
console.log(arr.join("*"));

// The pop() method removes the last element from an array:
console.log(arr.pop());

// The push() method adds a new element to an array (at the end):
console.log(arr.push('hey'));
console.log(arr);

// The shift() method removes the first array element and "shifts" all other elements to a lower index.
console.log(arr.shift());
console.log(arr);

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
console.log(arr.unshift(5));
console.log(arr);

// Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete:
delete arr[1];
console.log(arr);

// The splice() method can be used to add new items to an array:
console.log(arr.splice(1,1,'paresh'));

// The concat() method creates a new array by merging (concatenating) existing arrays:
console.log(arr.concat([1,2,3]));
console.log(arr);

// The slice() method slices out a piece of an array into a new array.
console.log(arr.slice(1,3));
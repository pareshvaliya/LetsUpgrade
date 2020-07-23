console.log("Higher Order Function");

// MAP used to some operation on every element

let arr = [1,2,3,4,5,6];

arr.forEach((el)=>{
    console.log(el);
})


let square = arr.map((el)=>el**2);
console.log(square);


// FILTER
// filter out data on basis of some condition

let even = arr.filter(el=>el%2==0);
console.log(even);

let evensq = arr.filter(el=>el%2==0).map(el=>el**2);
console.log(evensq);


let users = [{user:"1"},{"user":"2"},{"user":"3"},{"user":"4"}];
console.log(users);

let result = users.map(user=>{
    let mark = Math.random()*100;
    user.mark = mark;
    return user;
});
console.log(result);

let pass = result.filter(user=>{
    if(user.mark>35){
        return user;
    }
})
console.log(pass);

// Reduce
// accumulator and value
// it must have an initialize acc
let sum  = arr.reduce((acc,val)=>{
    acc+=val;
    return acc;
},0) // dafault value of acc set to zero

console.log(sum);

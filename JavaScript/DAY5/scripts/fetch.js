console.log('Fetch API');

// Making a get request

fetch('https://jsonplaceholder.typicode.com/comments/1').then(response=>response.json())
.then(data=>console.log(data));


// Making a post request
fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body:JSON.stringify({
        userId:254,
        title:"abc"
    })
}).then(response=>response.json())
.then(data=>console.log(data));


async function fetchdata(){
    const response = await fetch('https://jsonplaceholder.typicode.com/comments/1');

    const data = await response.json();

    console.log(data);
}

fetchdata();




// JSON.stringify(obj) coverts obj into json format

// JSON.parse(str) converts in to object

let obj1 = {
    name:'Prasad',
    age:24,
    canDrive:true,
}

console.log(obj1);
let str = JSON.stringify(obj1);
console.log(str)

let strobj = JSON.parse(str);
console.log(strobj)
// for
// while
// do while

console.log("Loops");

// For
for(let i=0;i<10;i++)
{
    if(i==3)
    {
        continue;
    }
    if(i==7)
    {
        break;
    }
    debugger; // use to debug the code 
    let num = i;
    console.log(i);
}

let arr = ['apple','orange','mango'];
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

// For each
arr.forEach(function(f,i){
    console.log(f,i);
})

let person = {
    name : 'paresh',
    age : 24
}
// iterate over an object
for(let key in person)
{
    console.log(person[key]);
}


// while
let i=0;
while(i<=5)
{
    console.log(i);
    i++;
}

// do while
let j = 0;
do
{
    console.log(i);
    j++;

}while(j<=6);
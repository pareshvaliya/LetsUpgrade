let arr = [];
let flag = true;222
while(flag)
{
    let num = Number(prompt("Enter a positive number"),0);
    arr.push(num);
    flag = confirm("Do you want to add more numbers ?");
}

console.log(arr);

let odd = arr.filter(el=>el%2!=0);
console.log(odd);

let cube = odd.map(e=>e**3);

console.log(cube);
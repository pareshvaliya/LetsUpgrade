let num = Number(prompt("Enter a number",0));

let table = document.getElementById('table');

let tnum = document.getElementById('tnum');
tnum.innerText += ' of '+num;

for(let i=1;i<=10;i++)
{
    let str = num+' x '+ i +' = '+ (num*i);
    table.innerHTML += `<li>${str}</li>`
}

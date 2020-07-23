// DOM -Document Object Model

// Whole Window is a Parent Object of all elements

// DOcument - Whole page  - it is child of window 

// head and body are two direct child of document

// document.head - give head element
// document.body - give body element


// every element on html page are objects

// Model - means how these objects are structure on web page



// getting the elements

// getElementById

console.log("DOM Basics");

const title = document.getElementById('title');
console.log(title);
console.log(title.innerHTML);
console.log(title.innerText);

// getElementsByClassName

const data = document.getElementsByClassName('imp');
console.log(data); //gives the collection

const para = document.getElementsByTagName('p');
console.log(para); 

// const dataarr = [...para];  OR

const dataaarr = Array.from(para);

// selector 
// for id - #
// for class - .

console.log(document.querySelector('.imp'));

const data1 = document.querySelectorAll('.imp');
console.log(data1);

data1.forEach(el=>{
    console.log(el);
})




// Changing attributes of element

const attr = document.querySelector('#attr');
console.log(attr.getAttribute('id'));

// attr.setAttribute('style','color:red;');

attr.classList.add('blue')

attr.classList.add('bgYellow')

attr.classList.remove('blue')

attr.classList.toggle('blue');

attr.style.color = 'red';



let arr = [1,2,3,4,5,6];

console.log(arr);

const list  = document.querySelector('#list');
console.log(list);


//  Append array to the web page

arr.forEach(n=>{
    // it will print only text
    // list.innerText += `<li>${n}</li>` ;
    list.innerHTML += `<li>${n}</li>` ;
})


// dataarr

dataaarr.forEach(para=>{
    if(para.innerText.includes('kumar'))
    {
        para.classList.add('highlight');
    }
})



// Button Click
const but = document.getElementById('btn');
but.onclick = ()=>{
    alert("hello you clicked me")
}

title.innerText += " Hello Paresh";

// to display time on page

const ctime = document.getElementById('time');

function clock()
{
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerHTML = time;
}

// clock();

// to call clock function after every one sec

setInterval(clock,1000);


// Switch to dark mode

const dmode = document.getElementById('dark');

dmode.onclick = function changeColor(){
    document.body.style.background = 'black';
    document.body.style.color = 'white';
}

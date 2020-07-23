let name = prompt("What is your name ?",'Anonymous');

document.getElementById('name').innerText = `Welcome to our web page ${name}`;

const ctime = document.getElementById('time');

function clock()
{
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerHTML = time;
}

setInterval(clock,1000);

document.body.classList.toggle('bgDark');
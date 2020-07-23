console.log("Question1");
// document.body.style.background = 'black';

let colorarr = ['gray','yellow','blue','red','lime','purple','white'];
let i=0;

function bgColor()
{
    i = i%(colorarr.length);
    document.body.style.background = colorarr[i];
    i++;
}

setInterval(bgColor,5000);


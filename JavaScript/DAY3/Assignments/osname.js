let osname = prompt("Please enter an OS name and Version separated by space",'none');
// console.log(osname);
let a;
if(osname != 'none')
{
    a = osname.split(" ");
    console.log(`The OS name is ${a[0]} and the Version is ${a[1]}`);
}
else
{
    console.log("Enter an valid OS name");
}
let users = [
    {
        name:'paresh',
        age:24
    },
    {
        name:'haresh',
        age:25
    }
]

// setTimeout(code,delay(in ms)) itwill execute the code after n ms

function getUsers(){
    setTimeout(()=>{
        let result = '';
        users.forEach(user=>{
            result += `The user is ${user.name} \n`;
        });
        console.log(result);
    },1000); // 1000 is the delay
}
// getUsers();

// using Callback


// function createUser(user,callback)
// {
//     setTimeout(()=>{
//         users.push(user);
//         callback();
//     },3000);
    
// }

// here getuser executed still user is not created
// createUser({name:'abc',age:23});
// createUser({name:'abc',age:23},getUsers);


// Promises - basically it has two para- resolve and reject


function createUser(user){
    return new Promise((resolve,reject)=>
    {
        users.push(user);
        // const error = false; //resolve is return
        const error = true; // reject is return

        if(!error){
            resolve();
        }
        else{
            reject("err occured");
        }
    },2000);
}

// if - resolve.then(execute).catch(catch err)
createUser({name:'abc',age:23}).then(getUsers).catch(err=>console.log(err));


const userData = new Promise((resolve,reject)=>{
    const err = true;
    if(err)
    {
        reject("err occuured");
    }
    else{
        resolve("success");
    }

});

userData.then(e=>console.log(e)).catch(e=>console.log(e));



// async await

const photos = [];
async function photoUpload()
{
    let status  = new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            photos.push('Avatar');
            resolve('Profile Updated');
        },3000)
    })

    let result = await status; // result is waiting till status is updated
    console.log(result);
}

photoUpload();



// json - javascript object notation
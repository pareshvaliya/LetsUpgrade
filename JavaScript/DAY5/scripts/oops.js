// const userOne = {
//     name:'paresh',
//     age:24
// }

class User{
    constructor(name,age,email){
        // this refer to owner of the object
        this.name = name;
        this.age = age;
        this.email = email
        this.lucoins = 0;
        this.courses = [];
    }
    // static method only can access by class name
    static greet()
    {
        console.log("Hellooo...");
    }

    login(){
        console.log(`${this.name} logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} logged out`);
        return this;
    }
    addCoins()
    {
        this.lucoins++;
        console.log(`${this.name} has ${this.lucoins} coins`);
        return this;
    }
}



// create object
// let user1 = new User('paresh',24,'paresh@gmail.com');

// user1.login();
// user1.addCoins();
// user1.addCoins();
// user1.logout();

// user1.login().addCoins().addCoins().logout();

// by default it call the costructor of base class
class Moderator extends User{
    // if you dont write below constructor then also 
    // it by default call the base class constructor.
    // constructor(name,age,email,role){
        // super use to call base class constructor
    //     super(name,age,email);
    //     this.role = 'Moderator'
    // }

    deleteUser(user){
        users = users.filter(u=>{
            return u.email != user.email;
        })
    }

}

class Admin extends Moderator
{
    addCourse(user,course)
    {
        user.courses.push(course);
        console.log(user);
    }
}

let user1 = new User('abc',24,'abc@gmail.com');
let user2 = new User('xyz',25,'xyz@gmail.com');
let mod = new Moderator('paresh',24,'paresh@gmail.com');
let users = [user1,user2];
console.log(users);
mod.deleteUser(user1);
console.log(users);

let admin = new Admin('P',25,'p@gmail.com');

admin.addCourse(user1,'Python');
admin.addCourse(user1,'Js');

User.greet();
Moderator.greet();
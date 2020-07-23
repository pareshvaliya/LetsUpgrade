class User
{
    constructor(name,age,email)
    {
        this.name = name;
        this.age = age;
        this.email = email;
        this.coins = 0;
        this.courses = [];
    }
    login()
    {
        console.log(`The user ${this.name} logged in`);
    }
    logout()
    {
        console.log(`The user ${this.name} logged out`);
    }
}

class Moderator extends User
{
    addCoins(user)
    {
        user.coins++;
        console.log(`The user ${user.name} has ${user.coins} coins`);
    }
    removeCoins(user)
    {
        user.coins--;
        console.log(`After removing The user ${user.name} has ${user.coins} coins`);
    }
    details(user)
    {
        console.log(user);
    }
}

class Admin extends Moderator
{
    addCourse(user,course)
    {
        user.courses.push(course);
        console.log(`The user ${user.name} enrolled for ${user.courses} courses `);
    }
    deleteCourse(user,course)
    {
        user.courses = user.courses.filter(u=>{
            return u != course;
        })
    }
}

let user1 = new User('Alice',23,'alice@gmail.com');
let user2 = new User('Bob',24,'bob@gmail.com');

let mod = new Moderator('Paresh',24,'paresh@gmail.com');

let admin = new Admin('Joy',25,'joy@gmail.com');

user1.login();
mod.addCoins(user1);
mod.addCoins(user1);
admin.addCourse(user1,'Python');
admin.addCourse(user1,'Java');
admin.deleteCourse(user1,'Java');
mod.removeCoins(user1);

mod.details(user1);
user1.logout();


mod.details(user2);
class Users {
    constructor () {
        this.users = [];
    }
    addUser (id, name, room) {
        var user = {
            id: id,
            name: name,
            room: room
        };
        this.users.push(user);
        return user;
    }
    removeUser (id) {
        var userIndex = this.users.findIndex((user)=> {
            return id === user.id;
        })
        if(userIndex !== -1) {
            return this.users.splice(userIndex, 1)[0];
        }
        return null;
    }
    getUser (id) {
        var user =  this.users.find((user) => {
            return id === user.id;
        })

        return user;
    }
    getUserList (room) {
        var users = this.users.filter((user) => {
            return user.room === room;
        });
        var namesArray = users.map((user) => {
            return user.name
        });
        return namesArray;
    }
}


module.exports = {
    Users: Users
}


// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     getUserDescription () {
//         return `${this.name} is ${this.age} year(s) old.`
//     }
// }

// var me = new Person('Andrew Mead', 25);
// var description = me.getUserDescription();

// console.log(description);
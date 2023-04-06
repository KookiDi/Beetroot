class User {
    constructor(name, role) {
        if (role === 'admin' || role === 'user') {
            this.name = name;
            this.role = role;
        } else {
            alert('Invalid data entered')
        }
    }

    getName() {
        return this.name;
    }

    getRole() {
        return this.role;
    }

    login() {
        console.log(`${this.name} logged in`);
    }

    logout() {
        console.log(`${this.name} logged out`);
    }

    changeName(newName) {
        this.name = newName;
        console.log(`Name changed to ${this.name}`)
    }

    changePassword() {
        console.log(`${this.name}'s password changed`)
    }
}

class Admin extends User {
    constructor(name, role) {
        super(name, role);
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
        console.log(`User ${user}`)
    }

    removeUser(user) {
        const index = this.users.indexOf(user);
        if (index >= 0) {
            this.users.splice(index,1);
            console.log(`User${user} removed`);
        } else {
            console.log(`User ${user} not found`);
        }
    }

    changeUserRole(user, newRole) {
        this.role = newRole;
        console.log(`User ${user} changed to ${this.role}`);
    }

    getAllUsers() {
        console.log(`All users: ${this.users}`);
    }

    removeAllUsers() {
        this.users = [];
        console.log(`All users removed`)
    }
}

let newUser = new User('Roma','user');
let newAdmin = new Admin('John', 'admin');

console.log(newUser.getName());
console.log(newUser.getRole());
newUser.login();
newUser.logout();
newUser.changeName('Bob');
newUser.changePassword();
newAdmin.addUser('Roma');
console.log(newAdmin.users);
newAdmin.removeUser('Roma');
console.log(newAdmin.users);
newAdmin.changeUserRole('Roma', 'admin')
newAdmin.addUser('Roma');
newAdmin.addUser('Roma');
newAdmin.getAllUsers();
newAdmin.removeAllUsers();
console.log(newAdmin.users);


const inquirer = require("inquirer");

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }
    printInfo() {
        console.log(`This employee is ${this.name}, their ID is ${this.id}, their role is ${this.role} and their email is ${this.email}.`)
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
    getName() {
        return this.name
    }
}

const test = new Employee("test", 1, "test@test.com")
test.printInfo();

module.exports = Employee;
const Employee = require("./employee");

class Engineer extends Employee {
    constructor(github) {
        super();
        this.github = github;
        this.role = "Engineer";
    }
}

const test2 = new Engineer ("git");
test2.name = "a";
test2.id = "b";
test2.email = "c@c.com";
// Engineer.printInfo();
console.log(test2);
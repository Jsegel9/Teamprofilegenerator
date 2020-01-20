const Employee = require("./employee");

class Intern extends Employee {
    constructor(school) {
        super();
        this.school = school;
        this.role = "Intern";
    }
    getSchool() {
        return this.school;
    }
}

const test3 = new Intern("Miami University");
test3.name = "test3";
test3.id = 2;
test3.email = "test3@test.com"

console.log(test3);
module.exports = Intern;
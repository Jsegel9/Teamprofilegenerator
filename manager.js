const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super();
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}
// const testman = new Manager(01)
// testman.name = "manager";
// testman.id = 5;
// testman.email = "manager@test.com";

// console.log(testman);
// getOffice(testman);
// testman.getOffice();
module.exports = Manager;
// getOffice();
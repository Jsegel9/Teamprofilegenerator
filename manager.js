const Employee = require("./employee");

class Manager extends Employee {
    constructor(officeNumber) {
        super();
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
    getOffice() {
        return this.officeNumber;
    }
}
const testman = new Manager (01)
testman.name = "manager";
testman.id = 5;
testman.email = "manager@test.com";

console.log(testman);
// getOffice(testman);
testman.getOffice();
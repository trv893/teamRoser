const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.role = "manager";
        this.officeNumber = officeNumber
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}


module.exports = Manager;
const Manager = require('../lib/managers');

describe("Manager", () => {
    describe("instantiate", ()=> {
        it ("should instantiate an instance of a new employee with appropriate properties: name, id, email, and github role", ()=> {
            // setup and exercise
            const manager = new Manager("Biff", 5, 'BifftheCliff@ropes.com', '101');
            // assert
            expect(typeof(manager)).toBe('object');
            expect(manager.name).toBe('Biff');
            expect(manager.id).toEqual(5);
            expect(manager.email).toBe("BifftheCliff@ropes.com");
            expect(manager.role).toBe("Manager");
            expect(manager.officeNumber).toBe('101')
        })
    })
    describe("methods", () => {
        it ("should return the name of the employee when the getName method is called", () => {
            const manager = new Manager("Biff", 5, 'BifftheCliff@ropes.com', '101');
            expect(manager.getName()).toBe('Biff');

        })
        it ("should return the id of the employee when the getID method is called", () => {
            const manager = new Manager("Biff", 5, 'BifftheCliff@ropes.com', '101');
            expect(manager.getId()).toEqual(5);

        })
        it ("should return the email of the employee when the getEmail method is called", () => {
            const manager = new Manager("Biff", 5, 'BifftheCliff@ropes.com', '101');
            expect(manager.getEmail()).toBe("BifftheCliff@ropes.com");

        })
        it ("should return the role of the employee when the getRole method is called", () => {
            const manager = new Manager("Biff", 5, 'BifftheCliff@ropes.com', '101');
            expect(manager.getRole()).toBe("Manager");

        })
        it ("should return the office number of the employee when the getOfficeNumber method is called", () => {
            const manager = new Manager("Biff", 5, 'BifftheCliff@ropes.com', '101');
            expect(manager.getOfficeNumber()).toBe('101');
        })
    })
})
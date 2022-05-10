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
            expect(manager.role).toBe("manager");
            expect(manager.officeNumber).toBe('101')
        })
    })
    describe("methods", () => {
        it ("should return the name, id, email of the employee, and office number when the getName, getID, getEmail, and getOfficeNumber methods are called", () => {
            const manager = new Manager("Biff", 5, 'BifftheCliff@ropes.com', '101');
            expect(manager.getName()).toBe('Biff');
            expect(manager.getId()).toEqual(5);
            expect(manager.getEmail()).toBe("BifftheCliff@ropes.com");
            expect(manager.getRole()).toBe("manager");
            expect(manager.getOfficeNumber()).toBe('101');
        })
    })
})
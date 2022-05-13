// SEAT: setup, exercise, assert, teardown
const Employee = require('../lib/employee');

describe("Employ", () => {
    describe("initial", () =>{
        it ("should instantiate an instance of a new employee", () =>{
            // setup & exercise
            const employee = new Employee();
            // assert
            expect(typeof(employee)).toBe('object');
        })
        it ("should initialize a new employee with properties name, id email and role", () => {
            // setup & exercise
            const newEmployee = new Employee("Frankfridder", 1, 'frankfridder@turtles.com');
            // assert
            expect(newEmployee.name).toBe('Frankfridder');
            expect(newEmployee.id).toEqual(1);
            expect(newEmployee.email).toBe('frankfridder@turtles.com');
        })
    })
    describe('methods', () =>{
        it("should return the name of the employee when the getName method is called", ()=>{
            // ??? do i need instantiate a new instance of employee here ???
            const newEmployee = new Employee('Homer', 2, 'mrsimpson@springfield.com')
            const getName = newEmployee.getName();
            expect(getName).toBe('Homer');

        })
        it("should return the ID of the employee when the getIDe method is called", ()=>{
            // ??? do i need instantiate a new instance of employee here ???
            const newEmployee = new Employee('Homer', 2, 'mrsimpson@springfield.com')
            const getID = newEmployee.getId();
            expect(getID).toEqual(2);
        })
        it("should return the Email of the employee when the getEmail method is called", ()=>{
            // ??? do i need instantiate a new instance of employee here ???
            const newEmployee = new Employee('Homer', 2, 'mrsimpson@springfield.com')
            const getEmail = newEmployee.getEmail();
            expect(getEmail).toBe("mrsimpson@springfield.com")
        })
    })
})

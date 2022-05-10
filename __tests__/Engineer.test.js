const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    describe("instantiate", ()=> {
        it ("should instantiate an instance of a new employee with appropriate properties: name, id, email, and github role", ()=> {
            // setup and exercise
            const engineer = new Engineer("Bob", 3, 'Bobbuildsbigbuiscuts@bakery.com', 'BigBob');
            // assert
            expect(typeof(engineer)).toBe('object');
            expect(engineer.name).toBe('Bob');
            expect(engineer.id).toEqual(3);
            expect(engineer.email).toBe("Bobbuildsbigbuiscuts@bakery.com");
            expect(engineer.role).toBe("engineer");
            expect(engineer.github).toBe('BigBob')
        })
    })
    describe("methods", () => {
        it ("should return the name, id, email of the employee, and github user name when the getName, getID, getEmail, and getGithub methods are called", () => {
            const engineer = new Engineer("Bob", 3, 'Bobbuildsbigbuiscuts@bakery.com', 'BigBob');
            expect(engineer.getName()).toBe('Bob');
            expect(engineer.getId()).toEqual(3);
            expect(engineer.getEmail()).toBe("Bobbuildsbigbuiscuts@bakery.com");
            expect(engineer.getRole()).toBe("engineer");
            expect(engineer.getGithub()).toBe('BigBob');
        })
    })
})
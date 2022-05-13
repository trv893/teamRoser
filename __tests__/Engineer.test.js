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
            expect(engineer.role).toBe("Engineer");
            expect(engineer.github).toBe('BigBob')
        })
    })
    describe("methods", () => {
        it ("should return the name of the employee when the getName method is called", () => {
            const engineer = new Engineer("Bob", 3, 'Bobbuildsbigbuiscuts@bakery.com', 'BigBob');
            expect(engineer.getName()).toBe('Bob');
        })
        it ("should return the ID of the employee when the getID method is called", () => {
            const engineer = new Engineer("Bob", 3, 'Bobbuildsbigbuiscuts@bakery.com', 'BigBob');
            expect(engineer.getId()).toEqual(3);
        })
        it ("should return the Email of the employee when the getEmail method is called", () => {
            const engineer = new Engineer("Bob", 3, 'Bobbuildsbigbuiscuts@bakery.com', 'BigBob');
            expect(engineer.getEmail()).toBe("Bobbuildsbigbuiscuts@bakery.com");
        })
        it ("should return the Role of the employee when the getRole method is called", () => {
            const engineer = new Engineer("Bob", 3, 'Bobbuildsbigbuiscuts@bakery.com', 'BigBob');
            expect(engineer.getRole()).toBe("Engineer");
        })
        it ("should return the Github usn of the employee when the getGithub method is called", () => {
            const engineer = new Engineer("Bob", 3, 'Bobbuildsbigbuiscuts@bakery.com', 'BigBob');
            expect(engineer.getGithub()).toBe('BigBob');
        })
    })
})
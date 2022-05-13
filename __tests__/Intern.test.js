const Intern = require('../lib/intern');

describe("Intern", () => {
    describe("instantiate", ()=> {
        it ("should instantiate an instance of a new employee with appropriate properties: name, id, email, and github role", ()=> {
            // setup and exercise
            const intern = new Intern("Sally", 4, 'sizzilinsally@suprise.com', 'Scranton U');
            // assert
            expect(typeof(intern)).toBe('object');
            expect(intern.name).toBe('Sally');
            expect(intern.id).toEqual(4);
            expect(intern.email).toBe("sizzilinsally@suprise.com");
            expect(intern.role).toBe("Intern");
            expect(intern.school).toBe('Scranton U')
        })
    })
    describe("methods", () => {
        it ("should return the name of the employee when the getName method is called", () => {
            const intern = new Intern("Sally", 4, 'sizzilinsally@suprise.com', 'Scranton U');
            expect(intern.getName()).toBe('Sally');
        })
        it ("should return the ID of the employee when the getID method is called", () => {
            const intern = new Intern("Sally", 4, 'sizzilinsally@suprise.com', 'Scranton U');
            expect(intern.getId()).toEqual(4);
        })
        it ("should return the Email of the employee when the getEmail method is called", () => {
            const intern = new Intern("Sally", 4, 'sizzilinsally@suprise.com', 'Scranton U');
            expect(intern.getEmail()).toBe("sizzilinsally@suprise.com");
        })
        it ("should return the Role of the employee when the getRole method is called", () => {
            const intern = new Intern("Sally", 4, 'sizzilinsally@suprise.com', 'Scranton U');
            expect(intern.getRole()).toBe("Intern");
        })
        it ("should return the School of the employee when the getSchool method is called", () => {
            const intern = new Intern("Sally", 4, 'sizzilinsally@suprise.com', 'Scranton U');
            expect(intern.getSchool()).toBe('Scranton U');
        })
    })
})
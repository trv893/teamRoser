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
        it ("should return the name, id, email of the employee, and school when the getName, getID, getEmail, and getSchool methods are called", () => {
            const intern = new Intern("Sally", 4, 'sizzilinsally@suprise.com', 'Scranton U');
            expect(intern.getName()).toBe('Sally');
            expect(intern.getId()).toEqual(4);
            expect(intern.getEmail()).toBe("sizzilinsally@suprise.com");
            expect(intern.getRole()).toBe("Intern");
            expect(intern.getSchool()).toBe('Scranton U');
        })
    })
})
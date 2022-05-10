const Employee = require('./employee')

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.role = "engineer";
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;
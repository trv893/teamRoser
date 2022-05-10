const Intern = require('./lib/intern');
const Manager = require('./lib/managers');
const Engineer = require('./lib/engineer');
// const template = require('./src/template.js');

const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    {
        type: "input",
        message: "Employee Name: ",
        name: "name"
    },
    {
        type: "input",
        message: "Employee ID: ",
        name: "id"
    },
    {
        type: "input",
        message: "Employee's Email: ",
        name: "email"
    },
    {
        type: "list",
        message: "Employee's position?",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"],
    },
    {
        type: "input",
        name: "github",
        message: "Employee's github username?",
        when: (answers) => {
            if (answers.role === "Engineer") {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "getSchool",
        message: "Employee's school name?",
        when: (answers) => {
            if (answers.role === "Intern") {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Employee's Office Number?",
        when: (answers) => {
            if (answers.role === "Manager") {
                return true;
            }
        }
    },
    {
        type: "list",
        name: "addAnother",
        message: "Would like to add another employee?",
        choices: ["Yes", "No"]
    }

]

var employeeArray = []
async function questionsPrompt() {
    let employee; 
    await inquirer.prompt(questions)
    .then((answers) => {
        switch(answers.role) {
            case 'Engineer':
                employee = new Engineer(answers.name, answers.id, answers.email, answers.github);
                employeeArray.push(employee);
            case 'Manager':
                employee = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                employeeArray.push(employee);
            case 'Intern':
                employee = new Intern(answers.name, answers.id, answers.email, answers.getSchool);
                employeeArray.push(employee);
        }if(answers.addAnother == "Yes"){
            questionsPrompt();
        }
    });
    console.log(employeeArray);
}

questionsPrompt();
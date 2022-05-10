const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const generateHTML = require('./src/template.js');

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
        message: "Employee Role",
        name: "employeeRole",
        choices: ["Manager", "Engineer", "Intern"],
    },
    {
        type: "input",
        name: "gitUser",
        message: "Provide employee's github username:",
        when: (answers) => {
            if (answers.employeeRole === "Engineer") {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "schoolName",
        message: "Provide employee's school name: ",
        when: (answers) => {
            if (answers.employeeRole === "Intern") {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Provide employee's Office Number: ",
        when: (answers) => {
            if (answers.employeeRole === "Manager") {
                return true;
            }
        }
    },
    {
        type: "confirm",
        name: "addEmp",
        message: "Would like to add another employee? [Y/N] "
    }

]

async function employeePrompt() {
    let empDetails; 
    await inquirer.prompt(employeeQuestions)
    .then((answers) => {
        if(answers.employeeRole == 'engineer') {
            empDetails = new Engineer(answers.empName, answers.empId, answers.empEmail, answers.gitUser); 
        } else {
            empDetails = new Intern(answers.empName, answers.empId, answers.empEmail, answers.schoolName); 
        }
        teamArray.push(empDetails);
        addEmployee = answers.addEmp;  
    });
}

init();
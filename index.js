const Intern = require('./lib/intern');
const Manager = require('./lib/managers');
const Engineer = require('./lib/engineer');
const genHtml = require('./src/template.js');

const fs = require('fs');
const inquirer = require('inquirer');

const questions = async(inputs = []) => {
    const prompts = [
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
        type: "confirm",
        name: "addAnother",
        message: "Would like to add another employee?",
        default:true
    }

    ];
    const { addAnother, ...answers } = await inquirer.prompt(prompts);
    const newInputs = [...inputs, answers];
    return addAnother ? questions(newInputs) : newInputs;
};
var employeeArray = [];
const questionsPrompt = async () => {
    
    const answers = await questions();
    answers.forEach(answers => {
        let role = answers.role;
        switch(role) {
            case 'Engineer':
                return employeeArray.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
            case 'Manager':
                return employeeArray.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
            case 'Intern':
                return employeeArray.push(new Intern(answers.name, answers.id, answers.email, answers.getSchool));
        }
    });
    console.log(employeeArray);
    genHtml(employeeArray);
    console.log("You may now view your team in the newly created html file");
}
questionsPrompt();

// async function startGen() {
//     await questionsPrompt()
//     .then((answers) => genHtml(answers))
// }

// startGen();

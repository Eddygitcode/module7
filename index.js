// TODO: Include packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Give a description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "What installations are required?"
    },
    {
        type: "input",
        name: "usage",
        message: "How will your application be used?"
    },
    {
        type: "list",
        name: "license",
        message: "What license will your project use?",
        choices: ["None", "MIT", "Apache"] //Look up list of licenses
    },
    {
        type: "input",
        name: "contributing",
        message: "Who is contributing to the project?"
    },
    {
        type: "input",
        name: "tests",
        message: "What tests are required?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(generateMarkdown);
}

// Function call to initialize app
init();

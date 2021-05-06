// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown.js');
const fileName = 'generatedREADME.md';

// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?',
    },    
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe usage?',
    },
    {
        type: 'input',
        name: 'constribution',
        message: 'Provide any contribution?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Questions',
    },
    {
        type: 'checkbox',
        message: 'License for your project?',
        name: 'license',
        choices: ['MIT', 'MPL'],
    },

];

const promptUser = () => {
    return inquirer.prompt(questions);
};

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    fs.writeFile(fileName, answers, err =>{
        if (err) return console.log("writeToFile error: "+err);
        else console.log("Successfully writeToFile!")
    });
}
const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
function init () {
    promptUser()
    .then((answers) => writeFileAsync(fileName, generateMarkdown(answers)))
    .then(() => console.log("Successfully wrote to "+fileName))
    .catch((err) => console.error(err)); 
};


// Function call to initialize app
init();







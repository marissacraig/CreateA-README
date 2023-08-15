// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs').promises;

// const createHTML = ({ title, description, tableOfContents, installation, usage, license, contributing, tests, github, linkedin }) =>

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
},
{
    type: 'input',
    name: 'description',
    message: 'What problem does your application solve?',
},
{
    type: 'checkbox',
    name: 'tableOfContents',
    message: 'Please select the sections you want to include in your Table of Contents.',
    choices: [' Usage ' , 
            ' Licenses ' , 
            ' Contributions ' , 
            ' Tests '],
},
{
    type: 'input',
    name: 'installation',
    message: 'Include any steps for installation of your app.',
},
{
    type: 'input',
    name: 'usage',
    message: 'List any usage instructions you may have for a user.',
},
{
    type: 'input',
    name: 'licenses',
    message: 'Select any licenses your app is covered under.',
},
{
    type: 'input',
    name: 'contributions',
    message: 'Let users know what contributions you are accepting, if any.',
},
{
    type: 'input',
    name: 'tests',
    message: 'Include any test instructions for users or contributers. ',
},
{
    type: 'input',
    name: 'github',
    message: 'Enter your github username.',
},
{
    type: 'input',
    name: 'linkedin',
    message: 'Enter your email address.',
}];


// TODO: Create a function to write README file
async function writeToFile(fileName, data) {

    await fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        } else {
            return console.log('Success!');
        };
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
            .then((answers) => {
            console.log(answers)
            const answerString = `
# ${answers.title}

## Description
${answers.description}
## Table of Contents
${answers.tableOfContents}
## Installation
${answers.installation}
## Usage
${answers.usage}
## Licenses
${answers.license}
## Contributions
${answers.contributing}
## Tests
${answers.tests}
## Questions
My GitHub username is ${answers.github}

LinkedIn: ${answers.linkedin}   
`
        console.log(answerString)
        writeToFile('README.md', answerString)
        })
};


// Function call to initialize app
init();
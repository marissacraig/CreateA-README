// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs').promises;

const tableOfContents = [
    {
        name: ' Usage ',
        value: ` * [Usage](#Usage)`
    },
    {
        name: ' Licenses ',
        value: `\n * [Licenses](#Licenses)`
    },
    {
        name:  ' Contributions ',
        value: `\n * [Contributions](#Contributions)`
    },
    {
        name: ' Tests ',
        value: `\n * [Tests](#tests) `
    }
];
const licenses = [
    {
        name: 'MIT',
        value: `MIT License: Open Source`
    },
    { 
        name: 'APACHE 2.0',
        value: `APACHE 2.0 License: Conditional Open Source`
    },
    { 
        name: 'GPL 3.0',
        value: `GPL 3.0 License: Gaurantees freedom to share and change all versions of a program`
    },
    { 
        name: 'BSD 3',
        value: `BSD 3 License: Conditional Open Source`
    },
    {
        name: 'None',
        value: `  `
    }
];
// TODO: Create an array of questions for user input
const questions = [
{
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
    choices: tableOfContents
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
    type: 'list',
    name: 'license',
    message: 'Select a license your app is covered under.',
    choices: licenses
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
    name: 'email',
    message: 'Enter your email address.',
},
{
    type: 'input',
    name: 'github',
    message: 'Enter your github username.',
},
{
    type: 'input',
    name: 'linkedin',
    message: 'Enter your linkedin username.',
}
];


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
            
            function renderLicenseBadge() {
                if (answers.license === 'MIT License: Open Source') {
                    const MIT = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
                    return MIT;
                }
                else if (answers.license === 'APACHE 2.0 License: Conditional Open Source') {
                    const APACHE = `![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
                    return APACHE;
                }
                else if (answers.license === 'GPL 3.0 License: Gaurantees freedom to share and change all versions of a program') {
                    const GPL = `![License: BSD 3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
                    return GPL;
                }
                else if (answers.license === 'BSD 3 License: Conditional Open Source') {
                    const BSD = `![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
                    return BSD;
                }
                else if (answers.license === '  ') {
                    const NONE = `  `;
                    return NONE;
                }
                };
            
            const answerString = `
# ${answers.title}

${renderLicenseBadge(answers.license)}   

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
${answers.contributions}

## Tests 
${answers.tests}

## Questions
Links to my email, GitHub, and LinkedIn have been included for any questions regarding my app. 

<br> [![Gmail badge](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:${answers.email})
[![github badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/${answers.github})
[![linkedin badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/${answers.linkedin})   
`
        writeToFile('README.md', answerString)
    })
};


// Function call to initialize app
init();
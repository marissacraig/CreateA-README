// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs').promises;

const licenses = [
{ 
    name: 'WTFPL Free Software License',
    value: ` [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/) `
},
{ 
    name: 'PDDL Open Data Commons Public Domain Dedication',
    value: ` [![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/) `
},
{ 
    name: 'Hippocratic License 3.0 (HL3): An Ethical License for Open Source Communities',
    value: ` [![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev) `
},
{ 
    name: 'Mozilla Public License 2.0',
    value: ` [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0) `
},
{
    name: 'CC Attribution 4.0 International',
    value: ` [![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/) `
},
{
    name: 'Attribution License by Open Data Commons',
    value: ` [![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/) `
},
{
    name: 'Perl Artistic License 2.0',
    value: ` [![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0) `
},
{
    name: 'SIL Open Font License 1.1',
    value: ` [![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1) `
}
];

const tableOfContents = [
    {
        name: ' Usage ',
        value: `* [Usage](#Usage)`
    },
    {
        name: ' Licenses ',
        value: `* [Licenses](#Licenses)`
    },
    {
        name:  ' Contributions ',
        value: `* [Contributions](#Contributions)`
    },
    {
        name: ' Tests ',
        value: `* [Tests](#tests)`
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
    type: 'checkbox',
    name: 'licenses',
    message: 'Select any licenses your app is covered under.',
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
            
            const answerString = `
# ${answers.title}

${answers.licenses}

## Description
${answers.description}

## Table of Contents
${answers.tableOfContents}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Licenses
${answers.licenses}

## Contributions 
${answers.contributing}

## Tests 
${answers.tests}

## Questions
Links to my email, GitHub, and LinkedIn have been included for any questions regarding my app. 
[![Gmail badge](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:${answers.email})
[![github badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/${answers.github})
[![linkedin badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/${answers.linkedin})   
`
        writeToFile('README.md', answerString)
    })
};


// Function call to initialize app
init();
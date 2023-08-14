// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const createHTML = ({ title, description, tableOfContents, installation, usage, license, contributing, tests, github, linkedin }) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">${title}</h1>
      <h1 class="display-4">Description</h1>
      <p class="lead">${description}.</p>
      <h1 class="display-4">Table of Contents</h1>
      <p class="lead">${tableOfContents}.</p>
      <h1 class="display-4">Installation</h1>
      <p class="lead">${installation}.</p>
      <h1 class="display-4">Usage</h1>
      <p class="lead">${usage}.</p>
      <h1 class="display-4">Licenses</h1>
      <p class="lead">${license}.</p>
      <h1 class="display-4">Contributions</h1>
      <p class="lead">${contributing}.</p>
      <h1 class="display-4">Tests</h1>
      <p class="lead">${tests}.</p>
      <h3><span class="badge bg-secondary">Questions</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${github}</li>
        <li class="list-group-item">LinkedIn: ${linkedin}</li>
      </ul>
    </div>
  </header>
</body>
</html>`;
// TODO: Create an array of questions for user input
const questions = () => {
    
    inquirer
        .prompt([
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
                type: 'input',
                name: 'tableOfContents',
                message: 'List a Table of Contents for your README.',
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
            },
        ])
       
        .then((answers) => {
        
            fs.writeFile('index.html', createHTML(answers), (err) =>
        err ? console.log(err) : console.log('Success!'))
        .catch((err) => console.error(err))
        }
    )};

// TODO: Create a function to write README file



// TODO: Create a function to initialize app
const init = () => {
    questions();
};

// Function call to initialize app
init();
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps to install this project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'When and how will this project be used?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide a list of collaborators, third-party assets and tutorials used.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'tbd',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Describe your project',
        choices: ['The MIT License', 'Other', 'GPLv2', 'Apache'],
    },
    {
        type: 'input',
        name: 'git',
        message: 'Enter GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your e-mail:',
    },
])
    .then((answers) => {
        const readMeContent = generateREADME(answers);

        fs.writeFile('README.md', readMeContent, (err) =>
            err ? console.log(err) : console.log('Congratulations on your new README!')
        );
    })

const generateREADME = ({ title, description, installation, usage, contribution, test, license, git, email }) =>
    `
# ${title}

## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    -  [Usage](#usage)
    - [Contribution](#contribution)
    - [test](#test)
    - [License](#license)
    - [Questions](#questions)

# Description
    ${description}

# Installation
    ${installation}

## Usage
    ${usage}

## Contribution
    ${contribution}

## Test
    ${test}

## License
    ${license}

## Questions
    ${git}
    ${email}`;

// TODO: Create a function to write README file
//function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
//function init() { }

// Function call to initialize app
//init();


const inquirer = require('inquirer');
const fs = require('fs');

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
        message: 'Test',
        choices: ['Y', 'N']
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
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
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
- [GitHub](https://github.com/${git})
- [Email](mailto:${email})
`;


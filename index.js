const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require(".utils/generateMarkdown.js");


const questions = () => {
    return inquirer.prompt([

        // title
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project.');
                    return false;
                }
            }
        },

        // description
        {
            type: 'input',
            name: 'description',
            message: 'Provide a brief description of your project (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide a brief description of your project.')
                    return false;
                }
            }
        },

        // installation instructions
        {
            type: 'input',
            name: 'install',
            message: 'Explain how to install your project:',
            default: 'There are no installation instructions.'
        },

        // usage information
        {
            type: 'input',
            name: 'usage',
            message: 'Explain how to use your project (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please explain how to use your project.')
                    return false;
                }
            }
        },

        // contribution guidelines
        {
            type: 'input',
            name: 'contribution',
            message: 'Explain how another developer can contribute to your project (Required)'
        },

        // test instructions
        {
            type: 'input',
            name: 'test',
            message: 'What command should a developer use to test your project? (Required)',
            default: 'npm test'
        },

        // license
        {
            type: 'list',
            name: 'license',
            message: 'Which license would you like to use?',
            choices: ['1', '2', '3', '4']
        },

        // github username
        {
            type: 'input',
            name: 'username',
            message: 'Enter your GitHub Username (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.')
                    return false;
                }
            }
        },

        // url of repo
        {
            type: 'input',
            name: 'repo',
            message: 'Enter the URL of your GitHub repository (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide the URL of your GitHub repository.')
                    return false;
                }
            }
        },

        // email
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email address.')
                    return false;
                }
            }
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
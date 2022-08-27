const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


const questions =[
    // title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
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
        validate: descriptionInput => {
            if (descriptionInput) {
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
        validate: usageInput => {
            if (usageInput) {
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
        choices: ['MIT', 'ISC', 'IBM', 'SIL']
    },

    // github username
    {
        type: 'input',
        name: 'name',
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
        validate: repoInput => {
            if (repoInput) {
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
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address.')
                return false;
            }
        }
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return new Promise ((resolve, reject) => {
        fs.writeFile("./dist/" + fileName, data, err => {
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
            });
        });
    });
};

// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log("README has been created")
        writeToFile("README.md", generateMarkdown(answers))
    })
    .catch(err =>
        console.log(err));
};

// function call to initialize app
init();
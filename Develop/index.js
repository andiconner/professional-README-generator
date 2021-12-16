// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is your project title? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter your Project Description (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter your Project Description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the Installation Instructions',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter the Installation Instruction!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter the Usage Information',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter the Project Usage Information!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter the Contribution Guidelines',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please enter the Contribution Guidelines!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to enter a license information for a "License" section?',
            default: true
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose your License type',
            choices: ["MIT", "GPLv3", "GPL"],
            when: ({ confirmLicense }) => confirmLicense,
        },

        {
            type: 'input',
            name: 'test',
            message: 'Enter the Test Instructions',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter the Test Instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github username',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your Github username ');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your Github username and email address');
                    return false;
                }
            }
        },
    ])
        // function to write README file
        .then(data => {
            const readmeText = generatePage(data)
            fs.writeFileSync('./README.md', readmeText)
        })
}

questions()


// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

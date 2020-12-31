const fs = require('fs');
const inquirer = require('inquirer');



inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Give a description of your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Give installation instructions for your project.',
            name: 'instructions',
        },
        {
            type: 'input',
            message: 'Give usage information.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Enter guidelines for contribution.',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Give testing instructions.',
            name: 'test',
        },
        {
            type: 'list',
            message: 'Choose a license for your application.',
            name: 'licensing',
            choices: ['ISC', 'MIT', 'GNU General', 'GNU Lesser General', 'Apache', 'Mozilla Public', 'BSD'],
        },
        {
            type: 'input',
            message: 'Enter your GitHub username.',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Enter your email address.',
            name: 'email',
        },

    ]);

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
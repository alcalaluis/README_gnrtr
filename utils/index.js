const fs = require('fs');
// calling inquirer from package.json file 
const inquirer = require('inquirer');


// using inquirer template for prompt questions user will answer in terminal
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

    ]).then((response) => {
        const { title, licensing, description, instructions, usage, contribution, test, github, email } = response;


       // Template literal containing user input
        const readMeTemplate = `# **${title}**\n ## ${licensing} \n\n # **Table of Contents** \n - [Description](#description) \n - [Installation](#installation) \n - [Usage](#usage) \n - [Contribution Guidelines](#contribution-guidelines) \n - [Test](#test) \n - [Licensing](#licensing) \n - [Questions](#questions) \n ## **Description:** \n #### ${description} \n\n ## **Installation:** \n ### ${instructions} \n\n ## **Usage:** \n ${usage} \n\n ## **Contribution Guidelines:** \n ${contribution} \n\n ## **Test:** \n ### ${test} \n\n ## **Licensing:** \n ### ${licensing} \n ## **Questions:** \n ### For any lingering questions contact me through GitHub or email: \n github.com/${github} \n ### ${email}`
       // Generating README.md file
        fs.writeFile('README.md', readMeTemplate, err =>
            err ? console.error(err) : console.log('Success!')
        )
    });
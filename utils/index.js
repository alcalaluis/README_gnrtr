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

    ]).then((response) => {
        const { title, description, instructions, usage, contribution, test, licensing, github, email } = response;


        const readMeTemplate = `# **${title}**
        ### ${licensing}

        # Table of Contents
        -[Description] (#description)
        -[Installation] (#instructions)
        -[Usage] (#usage)
        -[Contribution Guidelines] (#contribution-guidlines)
        -[Test] (#test)
        -[Licensing] (#licensing)
        -[Questions] (#questions)

        ## Description
        ### ${description}

        ## Installation 
        ### ${instructions}

        ## Usage 
        ### ${usage}

        ## Contribution Guidelines
        ### ${contribution}

        ## Test 
        ### ${test}

        ## Licensing
        ### ${licensing}

        ## Questions
        ### For any lingering questions contact me through GitHub or email:
        ### github.com/${github}
        ### ${email}`;

        fs.writeFile('README.md', readMeTemplate, err =>
            err ? console.error(err) : console.log('Success!')
        )
    });
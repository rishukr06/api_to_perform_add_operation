const inquirer = require('inquirer');

module.exports = {
    askVariables: () => {
        const questions = [
            {
                name: 'number1',
                type: 'input',
                message: 'Enter your 1st number:',
                validate: function( value ) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter 1st number';
                    }
                }
            },
            {
                name: 'number2',
                type: 'input',
                message: 'Enter your 2nd number:',
                validate: function(value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter 2nd number';
                    }
                }
            },
            {
                name: 'ops',
                type: 'list',
                message: 'Choose Your Operation:',
                choices: ['sum', 'multiply', 'subtract', 'divide'],
                validate: function(value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter 2nd number';
                    }
                }
            }
        ];
        return inquirer.prompt(questions);
    },
};

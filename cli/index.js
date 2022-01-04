const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

console.log(
    chalk.yellow(
        figlet.textSync('Ginit', { horizontalLayout: 'full' })
    )
);

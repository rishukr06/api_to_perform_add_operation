#!/usr/bin/env node

const clear = require('clear');
const figlet = require('figlet');
const chalk = require("chalk");

const inquirer  = require('./lib/inquirer');
const calculator = require('../routes/api/external');

clear();

const decorateText = (text) => {
  //  return text
  return figlet.textSync(text, {
      horizontalLayout: 'fitted',
      font: 'Ghost'
  })
}

console.log(
    chalk.yellow("Welcome to calculator CLI ...")
);

const run = async () => {
    const vars = await inquirer.askVariables();
    const {number1, number2, ops } = vars;
    const ans = await calculator(number1, number2, ops);

    console.log(
        chalk.green(
            `${ops} of ${number1} and ${number2} is ${ans}`
        )
    );

};

run();

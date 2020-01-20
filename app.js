const fs = require("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "list",
            name: "role",
            message: "What is your role?",
            choices: [
                ""
            ]
        }
    ])
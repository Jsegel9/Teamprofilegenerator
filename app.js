const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./employee");
const Intern = require("./intern");
const Engineer = require("./engineer");
const Manager = require("./manager");

class CreateTeam{
    constructor() {

    }
    enterEmployee(){
        return inquirer
            .prompt([
                {
                    type: "confirm",
                    name: "start",
                    message: "Would you like to add an employee to your team?"
                }
            ])
            .then(function(response){
                console.log(response);
            })
    }
}

const team = new CreateTeam();
team.enterEmployee();

// enterEmployee = function() {
//     return inquirer
//         .prompt([
//             {
//                 type: "confirm",
//                 name: "start",
//                 message: "Would you like to add an employee to your team?"
//             }
//         ])
//         .then(function(response){
//             console.log(response);
//         })

// }

// enterEmployee();
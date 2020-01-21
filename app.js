const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./employee");
const Intern = require("./intern");
const Engineer = require("./engineer");
const Manager = require("./manager");


function newTeam(){
    inquirer
        .prompt([
            {
                type: "confirm",
                name: "start",
                message: "Would you like to add an employee to your team?"
            }
        ])
        .then(function(response){
            if (response.start){
            chooseRole();
            
            
                // inquirer
                // .prompt([
                //     {
                //         type: "confirm",
                //         name: "idk",
                //         message: "idk"
                //     }
                // ])
            }
            else {
                testfun();
            }
        })
}

function chooseRole(){
    inquirer
        .prompt([
            {
                type: "list",
                name: "role",
                message: "What is their role?",
                choices: [
                    "Manager",
                    "Intern",
                    "Engineer"
                ]
            }
        ])
        .then(function(response){
            if(response.role === "Manager"){
                console.log("It is Manager");
                createManager();
            } else if(response.role ==="Engineer"){
                console.log("It is Engineer");
                createEngineer();
            } else {
                console.log("It is Intern");
                createIntern();
            } 
            // console.log(response);
        })
}

function createManager(){
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is their ID #?"
        },
        {
            type: "input",
            name: "email",
            message: "What is their email address?"
        },
        {
            type: "input",
            name: "number",
            message: "Please enter your office number",
        }
    ])
    .then(function(response){
        console.log(response);
    })
}

function createEngineer(){
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the Engineer's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is their ID #?"
            },
            {
                type: "input",
                name: "email",
                message: "What is their email address?"
            },
            {
                type: "input",
                name: "git",
                message: "What is their Github Username?"
            }
        ])
        .then(function(response){
            console.log(response);
        })
}

function createIntern(){
    inquirer
    .prompt([
        {
            type:"input",
            name:"Name",
            message: "What is the Intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is their ID #?"
        },
        {
            type: "input",
            name: "email",
            message: "What is their email address?"
        },
        {
            type: "input",
            name: "school",
            message: "Where do they go to school?"
        }
    ])
    .then(function(response){
        console.log(response);
    })
}

function testfun(){
    console.log("hello")
}

newTeam();


// class CreateTeam{
//     constructor() {
//         this.teamId = 0;
//     }
//     newTeam(){
//         return this.enterEmployee();
//     }
//     enterEmployee(){
//         this.teamId = 0;
//         inquirer
//             .prompt([
//                 {
//                     type: "confirm",
//                     name: "start",
//                     message: "Would you like to add an employee to your team?"
//                 }
//             ])
//             .then(function(response){
//                 if (response.start){
//                     this.chooseRole();
//                     console.log("yes");
//                 } else{
//                     this.quit();
//                     // console.log("quit")
//                 }
//             })
//             .catch(error =>  {
//                 console.log(error);
//             });
//     }
//     enterAgain(){
//         console.log("again");
//     }
//     chooseRole(){
//         console.log("chooserole");
//     }
//     quit(){
//         console.log("Quitting");
//         process.exit(0);
//     }
// }

// const team = new CreateTeam();
// team.newTeam();


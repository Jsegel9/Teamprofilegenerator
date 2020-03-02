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
                console.log("Quitting")
                process.exit(0)
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
        // console.log(response);
        const newManager = new Manager();
        newManager.name = response.name;
        newManager.email = response.email;
        newManager.id = response.id;
        newManager.officeNumber = response.number;
        console.log(newManager);
        fs.writeFile("./output/manager.json", JSON.stringify(newManager), function(error){
            if (error) throw (error) 
        })
        nextFunction();
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
            // console.log(response);
            const newEngineer = new Engineer();
            newEngineer.name = response.name;
            newEngineer.id = response.id;
            newEngineer.email = response.email;
            newEngineer.github = response.git;
            console.log(newEngineer);
            fs.writeFile("./output/engineer.json", JSON.stringify(newEngineer), function(error){
                if (error) throw (error)
            })
            nextFunction();
        })
}

function createIntern(){
    inquirer
    .prompt([
        {
            type:"input",
            name:"name",
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
        // console.log(response);
        const newIntern = new Intern();
        newIntern.name = response.name;
        newIntern.id = response.id;
        newIntern.email = response.email;
        newIntern.school = response.school;
        console.log(newIntern);
        fs.writeFile("./output/intern.json", JSON.stringify(newIntern), function(error){
            if (error) throw (error)
        })
        nextFunction();
    })
}

function testfun(){
    console.log("hello")
}

function nextFunction(){
    inquirer
    .prompt([
        {
            type: "confirm",
            name: "again",
            message: "Would you like to add another employee?"
        }
    ])
    .then(function(response){
        if(response.again){
            chooseRole();
        }
        else{
            inquirer.prompt([
                {
                    type: "list",
                    name: "done",
                    message: "Are you done inputting your team?",
                    choices: [
                        "Add New Employee",
                        "Generate Team",
                        "Quit"
                    ]
                }
            ])
            .then(function(response){
                if(response.done === "Add New Employee"){
                    chooseRole();
                }
                else if(response.done === "Generate Team"){
                    createRoster()
                }else{
                    process.exit(0)
                }
            })
        }
    })
}

function createRoster(){
    console.log("Create Roster")
    let rawManager = fs.readFileSync("./output/manager.json")
    let manager2 = JSON.parse(rawManager)
    let rawEngineer = fs.readFileSync("./output/engineer.json")
    let engineer2 = JSON.parse(rawEngineer)
    let rawIntern = fs.readFileSync("./output/intern.json")
    let intern2 = JSON.parse(rawIntern)
    const $html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Team Roster</h1>
        <ul>
            <li>
                <h2>Manager</h2>
                <br>
                <p>Name: ${manager2.name}</p>
                <br>
                <p>ID: ${manager2.id}</p>
                <br>
                <p>Email: ${manager2.email}</p>
                <br>
                <p>Office Number: ${manager2.officeNumber}</p>
            </li>
            <li>
                <h2>Engineer</h2>
                <br>
                <p>Name: ${engineer2.name}</p>
                <br>
                <p>ID: ${engineer2.id}</p>
                <br>
                <p>Email: ${engineer2.email}</p>
                <br>
                <p>Github Username: ${engineer2.github}</p>
            </li>
            <li>
                <h2>
                    Intern
                </h2>
                <br>
                <p>Name: ${intern2.name}</p>
                <br>
                <p>ID: ${intern2.id}</p>
                <br>
                <p>Email: ${intern2.email}</p>
                <br>
                <p>School: ${intern2.school}</p>
            </li>
        </ul>
    </body>
    </html>`
    fs.writeFile("index.html", $html, function(err){
        if (err) throw (err)
    })
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


const Employees = require("./lib/employees");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Generate = require("./lib/generateHTML");

const inquirer = require("inquirer");
const fs = require('fs');
const parse = require('node-html-parser').parse;

const verifyManagerQ = {
    type: "confirm",
    message: "This application is to be done by the manager only. Are you the manager?",
    name: "comfirmManager"
};

const managerQ = [
    {
        type: "input",
        message: "Enter manager's name:",
        name: "managerName"
    },
    {
        type: "input",
        message: "Enter manager's employee ID:",
        name: "managerID"
    },
    {
        type: "input",
        message: "Enter manager's email address:",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "Enter manager's office number:",
        name: "managerOfficeNum"
    }
];

const addEmployeesQ = {
    type: "list",
    message: "Select the role of employee you're adding next:",
    name: "title",
    choices: ["Engineer", "Intern", "Finish adding employees"]
};

const engineerQ = [
    {
        type: "input",
        message: "Enter engineer's name:",
        name: "engineerName"
    },
    {
        type: "input",
        message: "Enter engineer's ID:",
        name: "engineerID"
    },
    {
        type: "input",
        message: "Enter engineer's email address:",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "Enter engineer's Github username:",
        name: "engineerGitHub"
    }
];

const internQ = [
    {
        type: "input",
        message: "Enter intern's name:",
        name: "internName"
    },
    {
        type: "input",
        message: "Enter intern's ID:",
        name: "internID"
    },
    {
        type: "input",
        message: "Enter intern's email address:",
        name: "internEmail"
    },
    {
        type: "input",
        message: "Enter intern's school:",
        name: "internSchool"
    }
];

const managerArr = [];
const engineerArr = [];
const internArr = [];

runApp();

function runApp() {
    inquirer.prompt(verifyManagerQ)
        .then(({ comfirmManager }) => {
            if ( comfirmManager === true ) {
                promptManagerQ();
            } else {
                console.log("This form is to be filled by managers only.")
            };
        }).catch(function (error) {
            console.log(error);
        });
};

function promptManagerQ() {
    inquirer.prompt(managerQ)
        .then((res) => {     
            const managerRole = {managerRole: "Manager"};
            const managerInfo = Object.assign(res, managerRole)
            managerArr.push(managerInfo);
            console.log("Manager has been added.");
            promptAddEmployeesQ();
        });
};

function createManagerCard(data) {
    const allManagerData = [];
    data.forEach(data => {
        const newManager = new Manager(data.managerName,data.managerID,data.managerEmail,data.managerOfficeNum)
        const managerHtml = Generate.manager(newManager);
        allManagerData.push(managerHtml);

        fs.readFile('./templates/main.html', 'utf8', (err,html) =>{
            if(err) {
                throw err;
            };
            var root = parse(html);
            var body = root.querySelector('#managerContent');
            allManagerData.forEach(element => body.appendChild(element));
            fs.writeFileSync("./output/main.html", root.toString(), {flag:'a'}, function (err) {
                if (err) {
                    return console.log(err);
                }
            });
        });
    });
};

function promptAddEmployeesQ() {
    inquirer.prompt(addEmployeesQ)
        .then((res) => {
            if (res.title === "Finish adding employees") {
                createManagerCard(managerArr);
                createEngineerCard(engineerArr);
                createInternCard(internArr);
                console.log("You have finished filling your team's information.");
            } else if (res.title === "Engineer") {
                promptEngineerQ();
            } else if (res.title === "Intern") {
                promptInternQ();
            };
        });
};


function promptEngineerQ() {
    inquirer.prompt(engineerQ)
        .then((res) => {
            const engineerRole = {engineerRole: "Engineer"};
            const engineerInfo = Object.assign(res, engineerRole)
            engineerArr.push(engineerInfo);
            console.log("Engineer has been added.");
            promptAddEmployeesQ();
        });
};

function createEngineerCard(data) {
    const allEngineerData = [];
    data.forEach(data => {
        const newEngineer = new Engineer(data.engineerName,data.engineerID,data.engineerEmail,data.engineerGitHub);
        const engineerHtml = Generate.engineer(newEngineer);
        allEngineerData.push(engineerHtml);

        fs.readFile('./templates/main.html', 'utf8', (err,html) =>{
            if(err) {
                throw err;
            };
            var root = parse(html);
            var body = root.querySelector('#engineerContent');
            allEngineerData.forEach(element => body.appendChild(element));
            fs.writeFileSync("./output/main.html", root.toString(), {flag:'a'}, function (err) {
                if (err) {
                    return console.log(err);
                }
            });
        });
    });
};


function promptInternQ() {
    inquirer.prompt(internQ)
        .then((res) => {
            const internRole = {internRole: "Intern"};
            const internInfo = Object.assign(res, internRole)
            internArr.push(internInfo)
            console.log("Intern has been added.")
            promptAddEmployeesQ();
        });
};

function createInternCard(data) {
    const allInternData = [];
    data.forEach(data => {
        const newIntern = new Intern(data.internName,data.internID,data.internEmail,data.internSchool)
        const internHtml = Generate.intern(newIntern);
        allInternData.push(internHtml);

        fs.readFile('./templates/main.html', 'utf8', (err,html) =>{
            if(err) {
                throw err;
            };
            const root = parse(html);
            const body = root.querySelector('#internContent');
            allInternData.forEach(element => body.appendChild(element));
            fs.writeFileSync("./output/main.html", root.toString(), {flag:'a'}, function (err) {
                if (err) {
                    return console.log(err);
                }
            });
        });
    });
};






var Employees = require("./lib/employees");
var engineer = require("./lib/engineer");
var Manager = require("./lib/manager");
var intern = require("./lib/intern");
var inquirer = require("inquirer");

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
        type: "number",
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
        name: "engineerName"
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
        name: "internName"
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

const employeesArr = [];

runApp();

function runApp() {
    inquirer.prompt(verifyManagerQ)
        .then(({ comfirmManager }) => {
            if ( comfirmManager === true ) {
                promptManagerQ();
            } else {
                console.log("This form is to be filled by managers only.")
            }
        }).catch(function (error) {
            console.log(error);
        })
}

function promptManagerQ() {
    inquirer.prompt(managerQ)
        .then((res) => {
            const managerTitle = "Manager"
            const managerInfo = new Manager(res.managerName,res.managerID,res.managerEmail,res.managerOfficeNum,managerTitle)
           
            const managerName = managerInfo.getName(res.managerName);
            const managerID = managerInfo.getId(res.managerID);
            const managerRole = managerInfo.getTitle(managerTitle);
            const managerEmail = managerInfo.getEmail(res.managerEmail);
            const managerOfficeNum = managerInfo.getOfficeNum(res.managerOfficeNum);
           
            employeesArr.push(managerInfo);
            console.log("Manager has been added.");
            promptAddEmployeesQ();
        });
}

function promptAddEmployeesQ() {
    inquirer.prompt(addEmployeesQ)
        .then((res) => {
            if (res.title === "Finish adding employees") {
                console.log("You have finished filling your team's information.")
            } else if (res.title === "Engineer") {
                promptEngineerQ();
            } else if (res.title === "Intern") {
                promptInternQ();
            }
        });
}

function promptEngineerQ() {
    inquirer.prompt(engineerQ)
        .then((res) => {
            const engineerTitle = "Engineer";
            const engineerInfo = new Engineer(res.engineerName,res.engineerID,res.engineerEmail,res.engineerGitHub,engineerTitle);
            
            const engineerName = engineerInfo.getName(res.engineerName);
            const engineerID = engineerInfo.getId(res.engineerID);
            const engineerRole = engineerInfo.getTitle(engineerTitle);
            const engineerEmail = engineerInfo.getEmail(res.engineerEmail);
            const engineerGitHub = engineerInfo.getGitHub(res.engineerOfficeNum);
            
            employeesArr.push(engineerInfo);
            console.log("Engineer has been added.");
            promptAddEmployeesQ();
        });
}

function promptInternQ() {
    inquirer.prompt(internQ)
        .then((res) => {
            console.log(res);
            const internTitle = "Intern";
            const internInfo = new Intern(res.internName,res.internID,res.internEmail,res.internSchool,internTitle);
            
            const internName = internInfo.getName(res.internName);
            const internID = internInfo.getId(res.internID);
            const internRole = internInfo.getTitle(internTitle);
            const internEmail = internInfo.getEmail(res.internEmail);
            const internSchool = internInfo.getSchool(res.internSchool);
            
            employeesArr.push(internInfo)
            console.log("Intern has been added.")
            promptAddEmployeesQ();
        });
}




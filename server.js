const mysql = require('mysql12');
const inquirer = require('inquirer');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express(); 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employee_db'
},
console.log(`Connected to the employee_db database.`)
);

db.connect(function(err) {
    if (err) throw err;
    console.log('Welcome!')
    promptOne();
});

function promptOne() {
    inquirer
    .prompt({
        type: 'list',
        name: 'task',
        message: "What would you like to do?",
        choices: [
            "View Employees",
            "View Departments",
            "Add Employee",
            "Add Department",
            "Quit"]
    })
    .then(function({task}) {
        switch (task) {
            case "View Employee":
                viewEmployee();
                break;
            
            case "ViewDepartment":
                viewDepartment();
                break;
            
            case "Add Employee":
                addEmployee();
                break;

            case "Add Department":
                addDepartment();
                break;

            case "Quit":
                db.end();
                break;
        }
    });

}



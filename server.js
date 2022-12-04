const mysql = require('mysql2');
const inquirer = require('inquirer');
const express = require('express');
const { query } = require('express');

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

function viewEmployee() {
    console.log('You are now viewing employees.');

    var sql = `
    SELECT employee.id,
     employee.first_name,
      employee.last_name,
       roles.title,
        department.name AS department,
         roles.salary,
         CONCAT(manager.first_name, ' ', manager.last_name) AS manager
         FROM employee
         LEFT JOIN roles
         ON employee.roles_id = roles.id
         LEFT JOIN department 
         ON department.id = roles.department_id
         LEFT JOIN employee 
         ON manager.id = employee.manager_id`

         db.sql(query, function (err, res) {
            if (err) throw err;

            console.table(res);
            console.log ('You are now viewing employees');

            promptOne();
         })
}



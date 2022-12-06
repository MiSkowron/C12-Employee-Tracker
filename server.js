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

    var query =
    `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
  FROM employee e
  LEFT JOIN role r
	ON e.role_id = r.id
  LEFT JOIN department d
  ON d.id = r.department_id
  LEFT JOIN employee m
	ON m.id = e.manager_id`

  db.query(query, function (err, res) {
    if (err) throw err;

    console.table(res);
            console.log ('You are now viewing employees');

            promptOne();
         })
}

function addEmployee() {
    console.log("Inserting an employee!")
  
    var query =
      `SELECT r.id, r.title, r.salary 
        FROM role r`
  
    db.query(query, function (err, res) {
      if (err) throw err;
  
      const roleChoices = res.map(({ id, title, salary }) => ({
        value: id, title: `${title}`, salary: `${salary}`
      }));
  
      console.table(res);
      console.log("RoleToInsert!");
  
      promptInsert(roleChoices);
    });
  }
  function promptInsert(roleChoices) {

    inquirer
      .prompt([
        {
          type: "input",
          name: "first_name",
          message: "Employee first name?"
        },
        {
          type: "input",
          name: "last_name",
          message: "Employee last name?"
        },
        {
          type: "list",
          name: "roleId",
          message: "Employee role?",
          choices: roleChoices
        },
      ])
      .then(function (answer) {
        console.log(answer);
  
        var query = `INSERT INTO employee SET ?`
        db.query(query,
          {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: answer.roleId,
            manager_id: answer.managerId,
          },
          function (err, res) {
            if (err) throw err;
  
            console.table(res);
            console.log("Employee successfully added!");
  
            promptOne();
          });
      });
  }

  function viewDepartment() {
    console.log("Viewing Departments");
  
    var query =
      `SELECT d.id, d.name, r.salary AS budget
    FROM employee e
    LEFT JOIN role r
      ON e.role_id = r.id
    LEFT JOIN department d
    ON d.id = r.department_id
    GROUP BY d.id, d.name`
  
    db.query(query, function (err, res) {
      if (err) throw err;
  
      const departmentChoices = res.map(data => ({
        value: data.id, name: data.name
      }));
  
      console.table(res);
      console.log("Viewing Departments");
  
      promptDepartment(departmentChoices);
    });
};
  



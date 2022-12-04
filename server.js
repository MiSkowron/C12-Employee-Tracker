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

db.connect


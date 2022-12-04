SELECT department.id AS departmentId, 
name
FROM department;

SELECT roles.id AS roleId, 
title,
department.name AS department,
salary 
FROM roles

JOIN department
ON roles.department_id = department.id;

SELECT  employee.id AS employeeId,
employee.first_name + employee.last_name AS employeeName,
roles.title AS title,
department.name AS department,
roles.salary AS salary,
manager_id
FROM employee

JOIN roles 
ON employee.roles_id = roles.id

LEFT JOIN department
ON roles.department_id = department.id

LEFT JOIN employee
ON employee.manager_id = manager.id
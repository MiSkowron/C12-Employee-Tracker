SELECT department.id AS departmentId, 
name
FROM department;

SELECT role.id AS roleId, 
title,
department.name AS department,
salary 
FROM role

JOIN department
ON role.department_id = department.id;

SELECT  employee.id AS employeeId,
employee.first_name + employee.last_name AS employeeName,
role.title AS title,
department.name AS department,
role.salary AS salary,
manager_id
FROM employee

JOIN role 
ON employee.role_id = role.id

LEFT JOIN department
ON role.department_id = department.id

LEFT JOIN employee
ON employee.manager_id = manager.id
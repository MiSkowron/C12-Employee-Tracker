select id AS departmentID, name
from department;


SELECT 
role.id AS roleID,
title AS Title, 
department.name AS department,
salary

FROM role

JOIN department ON role.department_id = department.id;


SELECT  
e.id AS employeeID,
CONCAT (e.first_name,' ', e.last_name) AS employeeName, 
role.title AS Title, 
department.name AS department,
role.salary AS salary,
CONCAT (m.first_name,' ', m.last_name) AS managerName

FROM employee e

JOIN role ON e.role_id = role.id
LEFT JOIN department ON role.department_id = department.id
LEFT JOIN employee m ON e.manager_id = m.id
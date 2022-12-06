INSERT INTO department (name)
VALUES ("Management"),
       ("Customer Service");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 55000, 1),
       ("Clerk", 70000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom","Hill", 1, null),
       ("Billy","Bob",2 , 1);
      
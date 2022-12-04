INSERT INTO department  (name)
VALUES ('Grocery'),
       ('Produce'),
       ('Meat'),
       ('Bakery'),
       ('Deli'),
       ('Floral');

INSERT INTO role (title, salary)
VALUES ('Manager', '40000.00'),
       ('Clerk', '25000.00');

INSERT INTO employee (first_name, last_name, department_id, role_id)
VALUES ('Kyle', 'Black', 1, 1), 
       ('Billy', 'Burns', 1, 2),
       ('Bruno', 'McGill', 2, 1),
       ('Tim', 'Wilcox', 2, 2),
       ('George', 'Smith', 3, 1),
       ('Kendra', 'Rivers', 3, 2),
       ('Lisa', 'McBride', 4, 1),
       ('Eric', 'Baker', 4, 2),
       ('Mary', 'Sue', 5, 1),
       ('Matt', 'Carter', 5, 2),
       ('Julia', 'Owens', 6, 1),
       ('Isaac', 'Green', 6, 2); 
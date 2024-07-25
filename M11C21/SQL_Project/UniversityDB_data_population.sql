-- Populating courses table 

USE university_sql_project_schema;

INSERT INTO courses(course_name)
VALUES
('Python'),
('JavaScript'),
('SQL')
('React');

-- Populating student table

USE university_sql_project_schema;

INSERT INTO students(student_name)
VALUES
('Ana'),
('Alex'),
('Bea'),
('Berto'),
('Cristina'),
('César'),
('David'),
('Dolores'),
('Enrique'),
('Elisa');

-- Populating professors table

USE university_sql_project_schema;

INSERT INTO professors(professor_name)
VALUES
('Franciso'),
('Gilda'),
('Héctor');

-- Populating grades table

USE university_sql_project_schema;

INSERT INTO grades(grade_value, grade_course_id, grade_professor_id, grade_student_id)
VALUES
(RAND()*10, 1, 1, 1),
(RAND()*10, 1, 1, 2),
(RAND()*10, 1, 1, 3),
(RAND()*10, 1, 1, 4),
(RAND()*10, 1, 1, 5),
(RAND()*10, 1, 1, 6),
(RAND()*10, 1, 1, 7),
(RAND()*10, 1, 1, 8),
(RAND()*10, 1, 1, 9),
(RAND()*10, 1, 1, 10),
(RAND()*10, 2, 2, 1),
(RAND()*10, 2, 2, 2),
(RAND()*10, 2, 2, 3),
(RAND()*10, 2, 2, 4),
(RAND()*10, 2, 2, 5),
(RAND()*10, 3, 3, 6),
(RAND()*10, 3, 3, 7),
(RAND()*10, 3, 3, 8),
(RAND()*10, 3, 3, 9),
(RAND()*10, 3, 3, 10)
(RAND()*10, 4, 3, 10);
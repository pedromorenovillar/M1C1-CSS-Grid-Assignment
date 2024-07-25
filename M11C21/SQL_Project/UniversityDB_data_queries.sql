-- Query script for the average grade that is given by each professor

USE university_sql_project_schema;

SELECT p.professor_name AS 'Professor', ROUND(AVG(g.grade_value), 1) AS 'Average Grade'
FROM grades g
JOIN professors p
ON p.professor_id = g.grade_professor_id
GROUP BY p.professor_name;

-- Query script for the top grades for each student

USE university_sql_project_schema;

SELECT s.student_name AS 'Student', MAX(g.grade_value) AS 'Top Grade'
FROM grades g
JOIN students s
ON s.student_id = g.grade_student_id
GROUP BY s.student_name;

-- Query script for sorting students by the courses that they are enrolled in

USE university_sql_project_schema;

SELECT c.course_name AS 'Course', s.student_name AS 'Student'
FROM courses c
JOIN grades g
ON c.course_id = g.grade_course_id
JOIN students s
ON s.student_id = g.grade_student_id
ORDER BY c.course_name ASC;

-- Query script for a summary report of courses and their average grades, sorted by the most challenging course (course with the lowest average grade) to the easiest course

USE university_sql_project_schema;

SELECT c.course_name AS 'Course', ROUND(AVG(g.grade_value), 1) AS 'Average Grade'
FROM courses c
JOIN grades g
ON c.course_id = g.grade_course_id
GROUP BY c.course_name
ORDER BY ROUND(AVG(g.grade_value), 1) ASC;

-- Query script for finding which student and professor have the most courses in common

USE university_sql_project_schema;

SELECT s.student_name AS `Student`, p.professor_name AS `Professor`, COUNT(DISTINCT g.grade_course_id) AS `Shared Courses`
FROM grades g
JOIN students s
ON s.student_id = g.grade_student_id
JOIN professors p
ON p.professor_id = g.grade_professor_id
GROUP BY g.grade_student_id, g.grade_professor_id
ORDER BY `Shared Courses` DESC
LIMIT 1;
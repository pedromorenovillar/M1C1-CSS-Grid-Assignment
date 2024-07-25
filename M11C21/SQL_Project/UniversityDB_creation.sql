-- Creating schema
CREATE SCHEMA `university_sql_project_schema`;

-- Creating courses table
CREATE TABLE `university_sql_project_schema`.`courses` (
  `course_id` INT NOT NULL AUTO_INCREMENT,
  `course_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`course_id`),
  UNIQUE INDEX `course_id_UNIQUE` (`course_id` ASC) VISIBLE);

-- Creating students table
CREATE TABLE `university_sql_project_schema`.`students` (
  `student_id` INT NOT NULL AUTO_INCREMENT,
  `student_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`student_id`),
  UNIQUE INDEX `student_id_UNIQUE` (`student_id` ASC) VISIBLE);

-- Creating professors table
CREATE TABLE `university_sql_project_schema`.`professors` (
  `professor_id` INT NOT NULL AUTO_INCREMENT,
  `professor_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`professor_id`),
  UNIQUE INDEX `professor_id_UNIQUE` (`professor_id` ASC) VISIBLE);

-- Creating grades table
CREATE TABLE `university_sql_project_schema`.`grades` (
  `grade_id` INT NOT NULL AUTO_INCREMENT,
  `grade_value` SMALLINT(10) NOT NULL,
  `grade_student_id` INT NULL,
  `grade_course_id` INT NULL,
  `grade_professor_id` INT NULL,
  PRIMARY KEY (`grade_id`),
  UNIQUE INDEX `grade_id_UNIQUE` (`grade_id` ASC) VISIBLE,
  INDEX `grade_student_id_idx` (`grade_student_id` ASC) VISIBLE,
  INDEX `grade_professor_id_idx` (`grade_professor_id` ASC) VISIBLE,
  INDEX `grade_course_id_idx` (`grade_course_id` ASC) VISIBLE,
  CONSTRAINT `grade_student_id`
    FOREIGN KEY (`grade_student_id`)
    REFERENCES `university_sql_project_schema`.`students` (`student_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `grade_professor_id`
    FOREIGN KEY (`grade_professor_id`)
    REFERENCES `university_sql_project_schema`.`professors` (`professor_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `grade_course_id`
    FOREIGN KEY (`grade_course_id`)
    REFERENCES `university_sql_project_schema`.`courses` (`course_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);
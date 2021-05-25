DROP DATABASE IF EXISTS questionsDB;
CREATE database questionsDB;
use  questionsDB;

CREATE TABLE personal_questions(
id INT AUTO_INCREMENT NOT NULL,
question VARCHAR(200), 
answer VARCHAR(100),
Primary Key(id)
);
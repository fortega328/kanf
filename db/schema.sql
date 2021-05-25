DROP DATABASE IF EXISTS questionsDB;
CREATE database questionsDB;
USE  questionsDB;

CREATE TABLE personal_questions(
id INT AUTO_INCREMENT NOT NULL,
question VARCHAR(200), 
answer VARCHAR(100),
Primary Key(id)
);

DROP DATABASE IF EXISTS scoresDB;
CREATE database scoresDB;
USE scoreDB;

CREATE TABLE scoreDB(
id INT AUTO_INCREMENT NOT NULL,
user VARCHAR(200), 
testscores INTEGER,
category VARCHAR(100),
Primary Key(id)
);
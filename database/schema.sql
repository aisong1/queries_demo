DROP DATABASE IF EXISTS pokemon;

CREATE DATABASE pokemon;
USE pokemon;

CREATE TABLE pokemon (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  trait VARCHAR(255) NOT NULL
);

-- Execute this file using mysql -u root -p < database/schema.sql

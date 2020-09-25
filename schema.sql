DROP DATABASE IF EXISTS reviewService ;


CREATE DATABASE reviewService;

USE reviewService;



CREATE TABLE review (
    id INT PRIMARY KEY AUTO_INCREMENT,
    rate Double precision NOT NULL , 
    reviewsNum INT NOT NULL ,
    visitorName VARCHAR(50) NOT NULL ,
    avatar VARCHAR(100) NOT NULL,
    review TEXT NOT NULL,  
    col VARCHAR(50) NOT NULL
);



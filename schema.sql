DROP DATABASE IF EXISTS reviewService ;


CREATE DATABASE reviewService;

USE reviewService;


CREATE TABLE hotels (

    id INT PRIMARY KEY AUTO_INCREMENT,
    reviewsNum INT NOT NULL ,
    rate Double precision NOT NULL , 
    id-reviews INT NOT NULL REFERENCES review (id)
)


CREATE TABLE review (
    id INT PRIMARY KEY AUTO_INCREMENT,
    visitorName VARCHAR NOT NULL ,
    avatar URL NOT NULL ,
    revieDate date NOT NUL,
)



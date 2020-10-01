DROP DATABASE IF EXISTS reviewService ;


CREATE DATABASE reviewService;

USE reviewService;



CREATE TABLE review (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    visitorName VARCHAR(50) NOT NULL ,
    avatar VARCHAR(100) NOT NULL,
    review TEXT NOT NULL,
    hotelID  INT references hotels(id),
    col VARCHAR(50) NOT NULL
);

CREATE TABLE hotels (
    id INT PRIMARY KEY ,
    cleanRate Double precision NOT NULL ,
    commRate Double precision NOT NULL ,
    checkinRate Double precision NOT NULL ,
    acuurRate Double precision NOT NULL ,
    locRate Double precision NOT NULL ,
    valueRate Double precision NOT NULL

);
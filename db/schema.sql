DROP DATABASE IF EXISTS healthyHeadsDB;
CREATE DATABASE healthyHeadsDB;
USE healthyHeadsDB;

CREATE TABLE doctors (
    id INT AUTO_INCREMENT NOT NULL,
    prof_first_name VARCHAR(255) NOT NULL,
    prof_last_name VARCHAR(255) NOT NULL,
    prof_title VARCHAR(255) NOT NULL,
    prof_specialty1 VARCHAR(255) NOT NULL,
    prof_specialty2 VARCHAR(255) NOT NULL,
    prof_specialty3 VARCHAR(255) NOT NULL,
    prof_phone INT(10) NOT NULL,
    prof_email VARCHAR(255) NOT NULL,
    prof_street VARCHAR(255) NOT NULL,
    prof_city VARCHAR(255) NOT NULL,
    prof_state VARCHAR(255) NOT NULL,
    prof_zip INT(5) NOT NULL,
    prof_gender VARCHAR(255) NOT NULL,
    prof_years INT(2) NOT NULL,
    prof_insurance1 VARCHAR(255) NOT NULL,
    prof_insurance2 VARCHAR(255) NOT NULL,
    prof_insurance3 VARCHAR(255) NOT NULL,
    prof_language1 VARCHAR(255) NOT NULL,
    prof_language2 VARCHAR(255) NOT NULL,
    prof_language3 VARCHAR(255) NOT NULL,
    prof_photo VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE patients (
    id INT AUTO_INCREMENT NOT NULL,
    pt_first_name VARCHAR(255) NOT NULL,
    pt_last_name VARCHAR(255) NOT NULL,
    pt_gender VARCHAR(255) NOT NULL,
    pt_age INT(3) NOT NULL,
    pt_phone INT(10) NOT NULL,
    pt_email VARCHAR(255) NOT NULL,
    pt_profile_pic VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
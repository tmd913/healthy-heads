CREATE DATABASE healthyHeadsDB;
USE healthyHeadsDB;

CREATE TABLE doctors {
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL,
    specialty VARCHAR(255) NOT NULL,
    insurance BOOLEAN,
    priceSession DECIMAL(5, 2) NOT NULL,
    streetAddress VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    zipCode INT(5) NOT NULL,
    phone INT(10) NOT NULL,
    PRIMARY KEY (id)
};

INSERT INTO healthyHeadsDB VALUES ("John Smith", "Addiction Treatment", true, 100.00, "1600 Pennsylvania Ave NW", "Washington", "DC", "20500", "2025551600");
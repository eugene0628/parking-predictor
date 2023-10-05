-- Create the USERS table
CREATE TABLE USERS (
    UID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    username VARCHAR(255),
    password VARCHAR(255),
    parkin_pass_type VARCHAR(255),
    address VARCHAR(255),
    bio TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the SESSIONS table
CREATE TABLE SESSIONS (
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    USER INT,
    rec_garage VARCHAR(255),
    rec_avail BOOLEAN,
    rec_travel_time INT,
    FOREIGN KEY (USER) REFERENCES USERS(UID)
);

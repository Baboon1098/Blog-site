# Blog Site

## Description

As a manager of an online retail company, I want to enhance the backend of our e-commerce website.

### User Story

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

### Acceptance Criteria

GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database

## Installation

Download the files from the repo and install locally. Be sure to install NPM, mysql2, Sequelize, and dotenv. Then login to mysql using the following command: mysql -u root -p . Then source schema.sql. This will create the database. Then run: npm run seed. This will load the database. Then run: npm start in node to begin the application.

## Usage

This is an app local on your device that you may trigger within terminal and see the functionality in Insomnia

Link to video: [E-Commerce Site](https://drive.google.com/file/d/1WF-4R0RiJvwtGvbSeG6mN6JMPFBnzQmX/view)

Screenshot of App: 

![E-Commerce Site](/ecommerce-cap.png "E-Commerce Site")

## Credits

* Worked with Tutor Andrew Tirpok

* Used the following to help with belongsToMany [Sequelize](https://sequelize.org/api/v6/class/src/associations/belongs-to-many.js~belongstomany)

* Asked ASKBCS a few questions about some errors and got them resolved.

* Worked with Erin (Class Member) on a known issue with JSON Data for the Product POST and PUT

## License

MIT License

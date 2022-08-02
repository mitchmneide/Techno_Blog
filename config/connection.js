const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
if(process.env.JAWSFB_URL) {
    sequelize = new Sequelize(process.env.JAWSFB_URL);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

// create connection to database pass in mysql info 

module.exports = sequelize;
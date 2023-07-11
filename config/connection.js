require('dotenv').config();
// this module loads environment variables from .env file;

const Sequelize = require('sequelize');
//  this Node.js module is Object Relational Mapper tool that interacts with MySQL database.


const sequelize = process.env.JAWSDB_URL
// Use environment variables to connect to database
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: '127.0.0.1',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
// Export the sequelize instances for use in other files.

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('amirtest', 'root', '32253577Amir', {
  dialect: 'mysql',
  host: 'localhost',
});


module.exports = sequelize;

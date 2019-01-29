const dbConfig = require('./config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig.hostConfig);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

sequelize
    .query("SELECT * FROM coins WHERE date = ?", {
            raw: true,
            replacements: ['1850'],
            type: Sequelize.QueryTypes.SELECT
        })
    .then(myTableRows => {
        console.log(JSON.stringify(myTableRows))
      })
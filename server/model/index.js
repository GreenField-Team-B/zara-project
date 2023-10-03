const { Sequelize, DataTypes } = require("sequelize");
const connection = new Sequelize("commerce", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

connection
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })

  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

  const User = require('./user')(connection,DataTypes)

  // connection
  // .sync({ force: true })
  // .then(() => {
  //   console.log("tables created successfully!");
  // })
  // .catch((error) => {
  //   console.error("Unable to create table : ", error);
  // });

  module.exports = User

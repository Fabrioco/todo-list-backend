const { Sequelize } = require("sequelize");

const database = new Sequelize("auth_next", "postgres", "authnext", {
  host: "localhost",
  dialect: "postgres",
  define: {
    timestamps: false,
  },
});

module.exports = database;

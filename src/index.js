const express = require("express");
const dotenv = require("dotenv");
const database = require("./config/db.js");
const Todo = require("./models/todo.js");
const routerTodo = require("./routes/todo.js");

const app = express();
const PORT = 5000;

dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/todos", routerTodo);

database.sync({ force: false }).then(() => {
  console.log("Database connected");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

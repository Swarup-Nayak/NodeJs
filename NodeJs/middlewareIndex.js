const express = require("express");
const app = express();
const reqFilter = require("./middleware");
const route = express.Router();

// app.use(reqFilter);

route.use(reqFilter);

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

route.get("/users", (req, res) => {
  res.send("Welcome to Users Page");
});

route.get("/details", (req, res) => {
  res.send("Welcome to User Details Page");
});

route.get("/contact", (req, res) => {
  res.send("Welcome to Users Contact Page");
});

app.get("/about", (req, res) => {
  res.send("Welcome to About Page");
});

app.use("/", route);
app.listen(5000);

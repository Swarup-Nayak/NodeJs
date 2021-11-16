const express = require("express");
const app = express();

app.get("", (req, res) => {
  //   console.log(req.query.name);
  res.send(`Welcome <h1>${req.query.name} </h1> , this is Home Page
  <a href="/about">Go to About Page</a>
  `);
});

app.get("/about", (req, res) => {
  res.send(`This is About Page
  <h3>Mobile Numer<h3>
  <input type="text" placeholder="User Name" value='${req.query.name}'/>
  <button>Click Me </button>
  <a href="/">Go to Home Page</a>
  `);
});

app.get("/help", (req, res) => {
  res.send([
    {
      name: "anil",
      email: "anil@test.com",
    },
    {
      name: "Kapoor",
      email: "kp@test.com",
    },
  ]);
});

app.listen(5000);

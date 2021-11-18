const reqFilter = (req, res, next) => {
  console.log("request filter");
  if (!req.query.age) {
    res.send("Please provide Age");
  } else if (req.query.age < 18) {
    res.send("You are not allowed to Access this Page");
  } else {
    next();
  }
};

module.exports = reqFilter;

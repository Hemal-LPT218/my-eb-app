// index.js
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello Hemal Parmar from Elastic Beanstalk! with Github</h1>");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

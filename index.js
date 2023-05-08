// const express = require("express");
// const app = express();
// const path = require("path");
// const shop = require("./routes/shop");
// const addproduct = require("./routes/admin");

// app.use(shop);
// app.use(addproduct);

// app.use((req, res, next) => {
//   res.status(404).sendfile(path.join(__dirname, "views", "404.html"));
// });

// app.listen(3000, () => console.log("Server running on port 3000"));

// -------- template engine -------

const express = require("express");
const app = express();
const path = require("path");
const shop = require("./routes/shop");
const addproduct = require("./routes/admin");
const bodyParse = require("body-parser");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParse.urlencoded({ extended: false }));

const user = [];

// app.use((req, res, next) => {
//   res.status(404).sendfile(path.join(__dirname, "views", "404.html"));
// });

app.get("/", (req, res, next) => {
  res.render("index", {
    titleName: "HomePage",
  });
});

app.get("/add-user", (req, res, next) => {
  res.render("add-user", {
    titleName: "add-user",
    user: user,
  });
});

app.post("/add-user", (req, res, next) => {
  user.push({
    name: req.body.name,
  });
  res.redirect("/add-user");
});

app.listen(3000, () => console.log("Server running on port 3000"));

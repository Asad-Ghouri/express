const express = require("express");
const app = express();
const path = require("path");
const Router = express.Router();
const reqPath = require("../utils/path");

Router.get("/", (req, res, next) => {
  res.sendFile(path.join(reqPath, "views", "shop.html"));
});

module.exports = Router;

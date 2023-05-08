const express = require("express");
const app = express();
const path = require("path");
const adminRouter = express.Router();
const reqPath = require("../utils/path");

adminRouter.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(reqPath, "views", "add-product.html"));
});

module.exports = adminRouter;

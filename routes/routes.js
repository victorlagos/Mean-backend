const express = require("express");
const app = express();
app.use(require("../controllers/productos/producto.routes"));
module.exports = app;
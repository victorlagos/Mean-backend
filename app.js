require("./config/config");
const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(require("./routes/routes"));
mongoose.connect(process.env.Mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(resp=>{
    console.log("Conexión realizada correctamente");
}).catch(resp=>{
    console.log("Error en la conexión");
})
app.listen(PORT,()=>{
    console.log(`El servidor esta en ejecución en el puerto: ${PORT}`);
});
const dotenv = require("dotenv");
const resultado = dotenv.config();
if(typeof process.env.AMBIENTE == 'undefined'){
    console.log("Falta definir el ambiente de ejecución!");
    return;
}
if(process.env.AMBIENTE && process.env.AMBIENTE.trim() == 'produccion'){
    console.log("Produccion");
    //process.env.Mongo = "mongodb://localhost:27017/dbVentas";
    process.env.Mongo = "mongodb+srv://victor:12345@cluster0.4sqpk.mongodb.net/dbVentas?retryWrites=true&w=majority";
}else{
    console.log("Desarrollo");
    //process.env.Mongo = "mongodb://localhost:27017/dbVentasDev";
    process.env.Mongo = "mongodb+srv://victor:12345@cluster0.4sqpk.mongodb.net/dbVentasDev?retryWrites=true&w=majority";
}
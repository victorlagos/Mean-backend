const express = require("express");
const app = express();
const { GetProductos, GetProducto } = require("./productos");

async function getproductos(req, res){
    try{
        let respuesta = await GetProductos();
        res.send(respuesta);
    }catch(e){
        res.send("Error búsqueda de productos");
    }
}

//GET
app.get("/api/productos", getproductos);
module.exports = app;
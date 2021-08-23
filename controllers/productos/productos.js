const Producto = require("../../models/producto");
async function GetProductos(){
    let data = await Producto.find({});
    return data;
}

module.exports = {
    GetProductos
}
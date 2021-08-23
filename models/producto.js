const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productoSchema = new Schema({
    CODIGO:{
        type: String
    },
    NOMBRE:{
        type: String
    },
    UNITID:{
        type: Number
    },
    PRECIO_VENTA:{
        type: Number
    },
    COSTO_FINANCIERO:{
        type: String
    },
    IDLINEA:{
        type: Number
    },
    IDCATEGORIA:{
        type: Number
    },
    COD_ID_PROVEEDOR:{
        type: String
    },
    ESTADO:{
        type: String
    },
    TIPO_FABRICANTE:{
        type: String
    },
    NUMERO_PARTE:{
        type: String
    },
    LINEA:{
        type: String
    },
    CATEGORIA:{
        type: String
    },
    UEN:{
        type: String
    },
    MARCA:{
        type: String
    },
    PRECIO_MINIMO:{
        type: Number
    },
    DESCRIPCION:{
        type: String
    },
    IMAGEN_150:{
        type: String
    },
    IMAGEN_450:{
        type: String
    },
},{
        timestamps: true,
        versionKey: false
});
module.exports = mongoose.model("Productos", productoSchema, "Productos");
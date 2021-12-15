const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductoSchema = new Schema({
    nombre: { type: String, required: true },
    categoria: { type: String, required: true },
    ubicacion: { type: String, required: true },
    precio: { type: Number, required: true },
    fechaCreacion:{type:Date, default:Date.now()}
});

const Producto = mongoose.model("producto", ProductoSchema);
module.exports = Producto;
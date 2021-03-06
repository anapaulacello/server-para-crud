const express = require("express");
const router = express.Router();

const { createProducto,getAllProductos,getProductoById,updateProducto,deleteProducto} = require("../controllers/producto.controller");

router.post("/create", createProducto );
router.get("/allProductos", getAllProductos );
router.get("/:id", getProductoById );
router.put("/update/:id", updateProducto );
router.delete("/delete/:id", deleteProducto );

module.exports = router;
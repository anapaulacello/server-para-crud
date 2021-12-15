const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");
const Producto=require("../models/producto.models")

const createProducto= async (req, res, next) => {
    try {
        const newProducto = new Producto();
        newProducto.nombre= req.body.nombre;
        newProducto.categoria= req.body.categoria;
        newProducto.ubicacion= req.body.ubicacion;
        newProducto.precio= req.body.precio;
        const ProductoDb= await newProducto.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { producto: ProductoDb }
        })
    } catch (error) {
        return next(error);  
    }
}

const getAllProductos = async (req, res, next) => {
    try {
            const productos = await Producto.find();
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { productos: productos }
            });
        }catch (error) {
        return next(error)
    }
}

const getProductoById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const ProductoById = await Producto.find({_id:id});
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { producto: ProductoById }
        })
    } catch (error) {
        return next(error)
    }
}

const updateProducto= async(req,res,next)=>{
    try{
        const{nombre,categoria,ubicacion,precio}=req.body;
        let producto=await Producto.findById(req.params.id)
        if(!producto){
            res.status(404).json({msg:'no existe el producto'})
        }
        producto.nombre=nombre;
        producto.categoria=categoria;
        producto.ubicacion=ubicacion;
        producto.precio=precio;
        producto=await Producto.findOneAndUpdate({_id:req.params.id},producto,{new:true});
        res.json(producto);
    }catch(err){
        return next(err)
    }
}

const deleteProducto=async (req,res,next)=>{
    try {
        const {_id}=req.body;
        await Producto.deleteOne({_id:_id})
        console.log(req.body)
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { Producto: `${_id} borrado` }
        })
    } catch (error) {
        return next(error)
    }
}

module.exports={createProducto,getAllProductos,getProductoById,updateProducto,deleteProducto}
const ProductModel=require("../models/product.model");

module.exports={
    findAll:(req, res)=>{
        ProductModel.find()
        .then((data)=>res.json({products: data}))
        .catch((err)=>res.json(err));
    },
    findOne:(req, res)=>{
        ProductModel.findById(req.params.id)
        .then((data)=>res.json({product:data}))
        .catch((err)=>res.json(err));
    },
    updateOne:(req, res)=>{
        ProductModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then((data)=>res.json({product:data}))
        .catch((err)=>res.json(err));
    },
    create:(req, res)=>{
        ProductModel.create(req.body)
        .then((data)=>res.json({product:data}))
        .catch((err)=>res.json(err));
    },
    deleteOne:(req, res)=>{
        ProductModel.findByIdAndDelete(req.params.id)
        .then(message=>res.json({message:message}))
        .catch((err)=>res.json(err));
    }
};
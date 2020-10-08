const mongoose=require("mongoose");

const ProductSchema=new mongoose.Schema({
    title:{type:String, required:[true, "This field is required"]},
    price:{type:String, required:[true, "This field is required"]},
    desc:{type:String, required:[true, "This field is required"]},
});

module.exports =mongoose.model("Product", ProductSchema);
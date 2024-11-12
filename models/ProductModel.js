const {
    Schema,
    model
  } = require("mongoose");
  
const ProductSchema = new Schema({
    productName: {
      type: String,
      required: true,
      maxlength: 50
    },
    price : {
        type: Number,
        required : true,
    },
    description : {
        type : String ,
        required : true,
    },
    category :{
        type: String ,
        required : true

    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  const ProductModel = model("Product", ProductSchema)
  
  module.exports = ProductModel
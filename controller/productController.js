const Product = require('../models/ProductModel');

const getProducts = async (req , res) => {

    try {
        const allProducts = await Product.find()
    
        if (!allProducts || allProducts.length === 0) {
            res.status(500).json ({
                success : false,
                message : "There is no Product"
            })
        }
    
        res.status(200).json ( {
            success : true ,
            products : allProducts
        })
    }
    catch (err) {
        res.status(500).json ({
            message : err.message,
        })
    }
}

const addProduct = async (req , res) => {
    const { productName , price , description , category } = req.body
    
    try {

        const newProduct = new Product({productName , price , description , category})
        await newProduct.save()
        res.status(200).json ({
            success:true,
            message : 'Product saved successfully'
        })

    }
    catch (err){
        res.status(500).json({
            message : err.message
        })
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { productName, price, description, category } = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            id, // Pass only the ID here
            { productName, price, description, category }, // Fields to update
            { new: true } // Return the updated document
        );

        if (!updatedProduct) {
            return res.status(404).json({
                message: 'Product not found'
            });
        }

        res.status(200).json({
            success: true,
            product: updatedProduct
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

const removeProduct = async (req , res) => {

    const {productName} = req.body

    try {
        const deletedProduct = await Product.findOneAndDelete(productName)
        res.status(200).json ({
            success : true,
            product :deletedProduct
        })
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

module.exports = {getProducts , addProduct , removeProduct , updateProduct}
const express = require('express')
const router = express.Router()
const {getProducts , addProduct , removeProduct, updateProduct} = require ('../controller/productController')


router.get ('/products' , getProducts )
router.post ('/addproduct' , addProduct)
router.put('/products/:id' , updateProduct)
router.delete ('/deleteproduct' , removeProduct)

module.exports = router
import asyncHandler from "express-async-handler"; //TODO
import Product from "../models/productModel.js";

// @desc Fetch All Products
// @route GET /api/products
// @access public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc Fetch single product
// @route GET /api/products/id
// @access public
const getProductById = asyncHandler(async (req, res) => {
  //const product = await Product.find( {_id = req.params.id});
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    //res.status(404).json({ message: "Product Not Found" });
    res.status(404);
    throw new Error("Product id Not Found ");
  }
});

export { getProducts, getProductById };

import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../model/productModel.js";

const router = express.Router();

// @desc Fetch All Products
// @route GET /api/products
// @access public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// @desc Fetch single product
// @route GET /api/products/id
// @access public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    //const product = await Product.find( {_id = req.params.id});
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      //res.status(404).json({ message: "Product Not Found" });
      res.status(404);
      throw new Error("Product id Not Found ");
    }
  })
);

export default router;

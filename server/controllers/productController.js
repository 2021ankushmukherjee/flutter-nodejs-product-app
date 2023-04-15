const Product = require("../models/productModel");
const fs = require("fs");

//const path = require('path');

// Create a product
exports.createProduct = async (req, res) => {
  try {
    if (req.files || req.files.image) {
      // Array of allowed files
      const array_of_allowed_files = ["png", "jpeg", "jpg"];

      // Get the extension of the uploaded file
      const file_extension = req.files.image.name.split(".")[1];
     
      // Check if the uploaded file is allowed
      if (!array_of_allowed_files.includes(file_extension)) {
        return res.status(400).json({
          success: false,
          message: "Please upload jpeg, jpg or png only",
        });
      }
    }

    let product = await Product.create({
      productName: req.body.productName,
      description: req.body.description,
      price: Number.parseFloat(req.body.price),
    });

    req.files.image.mv("uploads/" + product._id + ".jpg");

    let imagePath =
      req.protocol +
      "://" +
      req.get("host") +
      "/uploads/" +
      product._id +
      ".jpg";

    product = await Product.findByIdAndUpdate(
      product._id,
      { image: imagePath },
      { new: true }
    );

    res.status(201).json({
      success: true,
      product,
    });
  } catch (err) {
    console.log(err.message);
  }
};

// get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      success: true,
      products,
    });
  } catch (err) {
    console.log(err.message);
  }
};

// get product detials
exports.getProductDetials = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (err) {
    console.log(err.message);
  }
};

//update a product
exports.updateProduct = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    console.log(product);
    let imagePath;

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "product not found",
      });
    }

    if (req.files || req.files.image) {
      // Array of allowed files
      const array_of_allowed_files = ["png", "jpeg", "jpg"];

      // Get the extension of the uploaded file
      const file_extension = req.files.image.name.split(".")[1];
     
      // Check if the uploaded file is allowed
      if (!array_of_allowed_files.includes(file_extension)) {
        return res.status(400).json({
          success: false,
          message: "Please upload jpeg, jpg or png only",
        });
      }

      req.files.image.mv("uploads/" + product._id + ".jpg");
      imagePath = req.protocol + "://" + req.get("host") + "/uploads/" + product._id + ".jpg";
    }

   
    // product.productName = req.body.productName;
    // product.description = req.body.description;
    // product.price = Number.parseFloat(req.body.price);
    // product.image =  imagePath != "" ? imagePath : "";

    // await product.save();
    let updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        productName: req.body.productName,
        description: req.body.description,
        price: Number.parseFloat(req.body.price),
        image: imagePath != "" ? imagePath : "",
      },
      { new: true }
    );

    res.status(201).json({
      success: true,
      updateProduct,
    });
  } catch (err) {
    console.log(err.message);
  }
};

//delete a product
exports.deleteProduct = async (req, res) => {
  try {
    //console.log(req.params.id)
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    await Product.findByIdAndRemove(req.params.id);
    fs.unlink("uploads/" + product._id + ".jpg", () => {});

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (err) {
    console.log(err.message);
  }
};

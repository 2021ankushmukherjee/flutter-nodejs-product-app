const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  image:{type:String}
},
{
    timestamps:true,
});


module.exports = mongoose.model("Product", productSchema);



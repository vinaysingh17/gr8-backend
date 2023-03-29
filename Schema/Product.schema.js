const mongoose = require("mongoose");

const userdata = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name (categoryName) is required"],
    },
    image: { type: String },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("product_category", userdata);
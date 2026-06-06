const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
title: String,
description: String,
price: Number,
image: String
});
3
module.exports = mongoose.model('Product', ProductSchema);
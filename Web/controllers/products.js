const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    // console.log('getProducts', req);
    const product = Product.fetchAll();
    res.json(product);
};

const products = [];
exports.postProduct = (req, res, next) => {
    const product = new Product();
    product.save();
}
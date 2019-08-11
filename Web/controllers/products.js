const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    console.log('getProducts');
    Product.fetchAll().then((products) => {
        console.log('getProducts', products);
        res.json(products);
    });
};

exports.postProduct = (req, res, next) => {
    console.log('postProduct', req.body);
    if (req.body) {
        const product = new Product(req.body.title, req.body.price);
        product.save().then(() => {
            res.json(product);
        });
    }
}
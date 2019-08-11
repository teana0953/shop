const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

const rootDir = require('../util/path');

// /admin/add-product => GET
router.get('/api/products', productsController.getProducts);

// /admin/add-product => POST
router.post('/api/product', productsController.postProduct);

router.get('', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'admin.html'));
});

module.exports = router;

const { Router } = require('express');
const router = Router();

const {
    addProduct,
    getAllProducts
} = require('../controllers/productControllers');




router.get('/all-products', getAllProducts);
router.post('/add-product', addProduct);

module.exports = router;


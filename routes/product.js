const { Router } = require('express');
const getProducts = require('../controllers/products.controller');

const router = Router();

router.get('/', getProducts)

module.exports = router;
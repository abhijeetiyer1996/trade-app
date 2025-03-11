const express = require('express');
const router = express.Router();
const {
    createOrder,
    getAllOrdersController,
    getOrdersByAssetController,
    cancelOrderController
} = require('../controllers/orders.controller');

router.post('/', createOrder);
router.get('/', getAllOrdersController);
router.get('/:asset', getOrdersByAssetController);
router.delete('/:id', cancelOrderController)

module.exports = router;

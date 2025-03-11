const {
    addOrder,
    getAllOrders,
    getOrdersByAsset,
    cancelOrder
} = require('../services/order.service');

const createOrder = (req, res) => {
    const { asset, price, quantity, type } = req.body;
    if (!asset || !price || !quantity || !type) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    if (type !== 'buy' && type !== 'sell') {
        return res.status(400).json({ message: 'Invalid order type, must be "buy" or "sell"' });
    }

    const newOrder = addOrder(asset, price, quantity, type);
    res.status(201).json({
        message: 'Order created successfully',
        order: newOrder.getDetails()
    });
};

const getAllOrdersController = (req, res) => {
    const allOrders = getAllOrders();
    res.status(200).json(allOrders.map(order => order.getDetails()));
};

const getOrdersByAssetController = (req, res) => {
    const { asset } = req.params;
    const assetOrders = getOrdersByAsset(asset);

    if (assetOrders.length > 0) {
        res.status(200).json(assetOrders.map(order => order.getDetails()));
    } else {
        res.status(404).json({
            message: 'No orders found for the specified asset'
        });
    }
};

const cancelOrderController = (req, res) => {
    const success = cancelOrder(parseInt(req.params.id));
    res.json({
        message: success ? 'Order cancelled' : 'Order not found'
    });
};

module.exports = {
    createOrder,
    getAllOrdersController,
    getOrdersByAssetController,
    cancelOrderController
};

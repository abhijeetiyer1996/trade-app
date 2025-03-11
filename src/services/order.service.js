const Order = require('../models/Orders.model');

let orders = [];

const addOrder = (asset, price, quantity, type) => {
    const newOrder = new Order(asset.toUpperCase(), price, quantity, type);
    orders.push(newOrder);
    return newOrder;
};

const getAllOrders = () => {
    return orders;
};

const getOrdersByAsset = (asset) => {
    return orders.filter(order => order.asset === asset.toUpperCase());
};

const cancelOrder = (id) => {
    const order = orders.find(o => o.id === id);
    if (order) {
        order.status = 'cancelled';
        return true;
    }
    return false;
};

module.exports = { addOrder, getAllOrders, getOrdersByAsset, cancelOrder };

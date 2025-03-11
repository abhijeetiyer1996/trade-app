const { getAllOrders } = require('./order.service');

const getTopBids = (limit = 5) => {
    const buyOrders = getAllOrders().filter(
        o => o.type === 'buy' && o.status === 'open'
    );
    buyOrders.sort(
        (a, b) => b.price - a.price || a.timestamp - b.timestamp
    );
    return buyOrders.slice(0, limit).map(o => ({
        price: o.price,
        quantity: o.remainingQuantity
    }));
};

const getTopAsks = (limit = 5) => {
    const sellOrders = getAllOrders().filter(
        o => o.type === 'sell' && o.status === 'open'
    );
    sellOrders.sort(
        (a, b) => a.price - b.price || a.timestamp - b.timestamp
    );
    return sellOrders.slice(0, limit).map(o => ({
        price: o.price,
        quantity: o.remainingQuantity
    }));
};

module.exports = { getTopBids, getTopAsks };

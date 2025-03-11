const { getAllOrders } = require('./order.service');

let tradeHistory = [];

const executeTrades = () => {
    const buyOrders = getAllOrders().filter(o => o.type === 'buy' && o.status === 'open');
    const sellOrders = getAllOrders().filter(o => o.type === 'sell' && o.status === 'open');

    while (buyOrders.length > 0 && sellOrders.length > 0) {
        const bestBuy = buyOrders[0];
        const bestSell = sellOrders[0];

        if (bestBuy.price >= bestSell.price) {
            const tradeQuantity = Math.min(bestBuy.remainingQuantity, bestSell.remainingQuantity);
            const tradePrice = bestSell.price;

            tradeHistory.push({
                asset: bestBuy.asset,
                price: tradePrice,
                quantity: tradeQuantity,
                timestamp: Date.now()
            });

            bestBuy.remainingQuantity -= tradeQuantity;
            bestSell.remainingQuantity -= tradeQuantity;

            bestBuy.updateStatus();
            bestSell.updateStatus();

            if (bestBuy.status === 'filled') buyOrders.shift();
            if (bestSell.status === 'filled') sellOrders.shift();
        } else {
            break;
        }
    }
};

const getTradeHistory = () => tradeHistory;

module.exports = { executeTrades, getTradeHistory };

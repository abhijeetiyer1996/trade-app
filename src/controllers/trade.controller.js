const {
    executeTrades,
    getTradeHistory
} = require('../services/trade.service');

const executeTradeController = (req, res) => {
    executeTrades();
    res.json({ message: 'Trade execution completed' });
};

const getTradeHistoryController = (req, res) =>
    res.json(getTradeHistory());

module.exports = {
    executeTradeController,
    getTradeHistoryController
};

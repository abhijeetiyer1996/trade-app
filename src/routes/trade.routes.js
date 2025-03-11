const express = require('express');
const router = express.Router();
const {
    executeTradeController,
    getTradeHistoryController
} = require('../controllers/trade.controller');

router.post('/execute', executeTradeController);
router.get('/history', getTradeHistoryController);

module.exports = router;

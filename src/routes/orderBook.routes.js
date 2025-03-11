const express = require('express');
const router = express.Router();
const {
    getTopBidsController,
    getTopAsksController
} = require('../controllers/orderBook.controller');

router.get('/bids', getTopBidsController);
router.get('/asks', getTopAsksController);

module.exports = router;

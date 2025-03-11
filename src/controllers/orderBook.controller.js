const {
    getTopBids,
    getTopAsks
} = require('../services/oderBook.service');

const getTopBidsController = (req, res) => res.json(getTopBids());
const getTopAsksController = (req, res) => res.json(getTopAsks());

module.exports = { getTopBidsController, getTopAsksController };

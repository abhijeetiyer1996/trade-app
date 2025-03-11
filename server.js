require('dotenv').config();
const express = require('express');
const app = express();
const orderRoutes = require('./src/routes/order.routes');
const assetRoutes = require('./src/routes/asset.routes');
const orderBookRoutes = require('./src/routes/orderBook.routes');
const tradeRoutes = require('./src/routes/trade.routes');

const PORT = process.env.port || 3000;
app.use(express.json());

app.use('/api/orders', orderRoutes);
app.use('/api/assets', assetRoutes);
app.use('/api/orderbook', orderBookRoutes);
app.use('/api/trades', tradeRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
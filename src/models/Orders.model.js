class Order {
    static idCounter = 1;

    constructor(asset, price, quantity, type) {
        this.id = Order.idCounter++;
        this.asset = asset;
        this.price = price;
        this.quantity = quantity;
        this.type = type;
        this.timestamp = Date.now();
        this.remainingQuantity = quantity;
        this.status = 'open';
    }
    // Get order details
    getDetails() {
        return {
            id: this.id,
            asset: this.asset,
            price: this.price,
            quantity: this.quantity,
            remainingQuantity: this.remainingQuantity,
            type: this.type,
            timestamp: this.timestamp,
            status: this.status
        };
    }

    // Update order status
    updateStatus() {
        if (this.remainingQuantity === 0) {
            this.status = 'filled';
        } else if (this.remainingQuantity < this.quantity) {
            this.status = 'partially_filled';
        }
    }
}

module.exports = Order;

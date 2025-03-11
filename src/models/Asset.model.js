class Asset { 
    static idCounter = 1;
    constructor (symbol, name, pricePerUnit, is_deleted) { 
        this.id = Asset.idCounter++;
        this.symbol = symbol
        this.name = name
        this.pricePerUnit = pricePerUnit
        this.is_deleted = false
    }

    deleteAsset() {
        this.is_deleted = true;
        return { message: 'Asset deleted successfully' };
    }

    getDetails() {
        return {
            id: this.id,
            symbol: this.symbol,
            name: this.name,
            price: this.pricePerUnit
        };
    }
}

module.exports = Asset
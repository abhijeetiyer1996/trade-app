const Asset = require('../models/Asset.model');
let assets = [];

const createNewAsset = (assetDetails) => { 
    const { symbol, name, pricePerUnit } = assetDetails;
    const newAsset = new Asset(symbol, name, pricePerUnit);
    assets.push(newAsset);
    return newAsset.getDetails();
}

const fetchAssetDetails = (symbol) => { 
    return assets.find(a => a.symbol.toUpperCase() === symbol);
}

const fetchAllAssets = () => { 
    const allAssets = assets.filter(a => !a.is_deleted);
    return allAssets
}

const findAssetById = (id) => { 
    return assets.find(a => a.id === id && !a.is_deleted);
}

const updateAsset = (details, asset) => {
    Object.keys(details).forEach(field => {
        if (asset && asset.hasOwnProperty(field)) {
            asset[field] = details[field];           
        }
    });

    return asset;
};

const queryAsset = (filter) => {
    return assets.filter(asset => 
        Object.keys(filter).every(key => 
            asset[key] === filter[key]
        )
    );
};

const removeAsset = (asset) => {
    return asset.deleteAsset()
}

module.exports = {
    createNewAsset,
    fetchAssetDetails,
    fetchAllAssets,
    findAssetById,
    updateAsset,
    queryAsset,
    removeAsset
} 
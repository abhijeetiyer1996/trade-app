const {
    createNewAsset,
    fetchAssetDetails,
    fetchAllAssets,
    findAssetById,
    updateAsset,
    queryAsset,
    removeAsset
} = require('../services/asset.service');

const createAsset = (req, res) => {
    const { symbol, name, pricePerUnit } = req.body;
    const existingAsset = queryAsset({ symbol: symbol.toUpperCase() });
    if (existingAsset.length !== 0) {
        return res.status(400).json({ message: 'Asset with this symbol already exists' });
    }
    const newAsset = createNewAsset({
        symbol: symbol.toUpperCase(),
        name,
        pricePerUnit
    }) 
    res.status(201).json({
        message: "Asset added successfully",
        asset: newAsset
    });
};

const getAssetDetails = (req, res) => {
    const { symbol } = req.params;
    const asset = fetchAssetDetails(symbol.toUpperCase())
    if (asset) {
        res.status(200).json(asset);
    } else {
        res.status(404).json({
            message: 'Asset not found'
        });
    }
};

const getAllAssets = (req, res) => {
    const allAssets = fetchAllAssets();
    res.status(200).json(allAssets)
}

const updateAssetById = (req, res) => { 
    const { id } = req.params;
    const { name, symbol, pricePerUnit } = req.body;
    if (!id) {
        return res.status(400).json({
            message: 'Bad Request (missing asset id)'
        })
    }
    if (!name && !symbol && !pricePerUnit) { 
        return res.status(400).json({
            message: 'Bad Request (missing updating details)'
        })
    }
    const assetExists = findAssetById(parseInt(id));
    if (!assetExists) { 
        return res.json({
            message: "Requested Asset does not exist"
        })
    }
    const updatedAsset = updateAsset(req.body, assetExists)
    return res.json({
        message: "Asset Updated Successfully",
        asset: updatedAsset
    });
}

const deleteAssetById = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({message: 'Bad Request (missing asset id)'})
    }
    const assetExists = findAssetById(parseInt(id));
    if (!assetExists) {
       return res.json({message: "Requested Asset cannot be deleted (maybe already deleted)"})
    }
    const message = removeAsset(assetExists);
    res.json({ message });
}

module.exports = {
    getAssetDetails,
    createAsset,
    getAllAssets,
    updateAssetById,
    deleteAssetById
};
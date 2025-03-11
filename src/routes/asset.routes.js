const express = require('express');
const router = express.Router();
const {
    getAssetDetails,
    createAsset,
    getAllAssets,
    updateAssetById,
    deleteAssetById
} = require('../controllers/asset.controller');

router.get('/:symbol', getAssetDetails);
router.post('/', createAsset);
router.get('/', getAllAssets);
router.patch('/:id', updateAssetById);
router.delete('/:id', deleteAssetById);

module.exports = router;
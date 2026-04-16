const express = require('express');
const router = express.Router();
const cakeController = require('../controllers/cakeController');

// Get all cakes
router.get('/', cakeController.getAllCakes);

// Get single cake
router.get('/:id', cakeController.getCakeById);

// Create a cake (protected route - admin only)
router.post('/', cakeController.createCake);

// Update a cake (protected route - admin only)
router.put('/:id', cakeController.updateCake);

// Delete a cake (protected route - admin only)
router.delete('/:id', cakeController.deleteCake);

module.exports = router;

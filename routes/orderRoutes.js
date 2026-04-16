const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Create new order
router.post('/', orderController.createOrder);

// Get all orders (admin only)
router.get('/', orderController.getAllOrders);

// Get user's orders
router.get('/myorders', orderController.getMyOrders);

// Get order by ID
router.get('/:id', orderController.getOrderById);

// Update order status (admin only)
router.put('/:id/status', orderController.updateOrderStatus);

module.exports = router;

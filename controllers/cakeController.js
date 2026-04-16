const Cake = require('../models/Cake');

// @desc    Get all cakes
// @route   GET /api/v1/cakes
exports.getAllCakes = async (req, res) => {
  try {
    const cakes = await Cake.find({});
    res.json(cakes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single cake
// @route   GET /api/v1/cakes/:id
exports.getCakeById = async (req, res) => {
  try {
    const cake = await Cake.findById(req.params.id);
    if (cake) {
      res.json(cake);
    } else {
      res.status(404).json({ message: 'Cake not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a cake
// @route   POST /api/v1/cakes
exports.createCake = async (req, res) => {
  try {
    const cake = new Cake(req.body);
    const createdCake = await cake.save();
    res.status(201).json(createdCake);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a cake
// @route   PUT /api/v1/cakes/:id
exports.updateCake = async (req, res) => {
  try {
    const cake = await Cake.findById(req.params.id);
    if (cake) {
      Object.assign(cake, req.body);
      const updatedCake = await cake.save();
      res.json(updatedCake);
    } else {
      res.status(404).json({ message: 'Cake not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a cake
// @route   DELETE /api/v1/cakes/:id
exports.deleteCake = async (req, res) => {
  try {
    const cake = await Cake.findById(req.params.id);
    if (cake) {
      await cake.deleteOne();
      res.json({ message: 'Cake removed' });
    } else {
      res.status(404).json({ message: 'Cake not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

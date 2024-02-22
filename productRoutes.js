const express = require('express');
const router = express.Router();


const products = [
  { id: 1, name: 'Shirt', price: 10.99 },
  { id: 2, name: 'Pants', price: 20.99 },
  { id: 3, name: 'Sweatshirts', price: 15.99 },
];


router.get('/', (req, res) => {
  res.json(products);
});


router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(product => product.id === id);
  if (!product) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    res.json(product);
  }
});


router.post('/', (req, res) => {
  const { name, price } = req.body;
  // Add validation here if necessary
  const id = products.length + 1; // Dummy ID generation
  const newProduct = { id, name, price };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price } = req.body;
  const index = products.findIndex(product => product.id === id);
  if (index === -1) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    products[index] = { id, name, price };
    res.json(products[index]);
  }
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(product => product.id === id);
  if (index === -1) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    const deletedProduct = products.splice(index, 1)[0];
    res.json(deletedProduct);
  }
});

module.exports = router;

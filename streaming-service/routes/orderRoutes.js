const express = require('express');
const router = express.Router();

// Contoh rute untuk mendapatkan semua pesanan
router.get('/', (req, res) => {
  res.send('Semua pesanan');
});

// Contoh rute untuk membuat pesanan baru
router.post('/', (req, res) => {
  res.send('Pesanan baru dibuat');
});

module.exports = router;

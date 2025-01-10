const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);  // Mendapatkan semua user
router.post('/', userController.createUser);  // Membuat user baru
router.get('/:id', userController.getUserById);  // Mendapatkan user berdasarkan id
router.put('/:id', userController.updateUser);  // Memperbarui user berdasarkan id
router.delete('/:id', userController.deleteUser);  // Menghapus user berdasarkan id


module.exports = router;

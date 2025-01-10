
const User = require('../models/User');

// Fungsi untuk mendapatkan semua pengguna
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

// Fungsi untuk membuat pengguna baru
const createUser = async (req, res) => {
  const { nama, email, password } = req.body;
  try {
    const user = await User.create({ nama, email, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
};

module.exports = { getAllUsers, createUser };

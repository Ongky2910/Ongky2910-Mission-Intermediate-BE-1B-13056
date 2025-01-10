const express = require('express');
const app = express();
const port = 3000;

const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Middleware untuk parsing JSON
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the API!');
  });
  
// Menyambungkan routes ke aplikasi
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


  
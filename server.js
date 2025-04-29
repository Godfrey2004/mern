const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once('open', () => console.log('MongoDB connected'));

// Mongoose Schema with address field
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,  // ✅ Added address field
  password: String,
});

const User = mongoose.model('User', userSchema);

// POST route to add user
app.post('/register', async (req, res) => {
  try {
    const { name, email, address, password } = req.body; // ✅ Include address
    const newUser = new User({ name, email, address, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

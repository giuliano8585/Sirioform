const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/centers', require('./routes/centers'));
app.use('/api/instructors', require('./routes/instructors'));
app.use('/api', require('./routes/protected')); // Nuova rotta protetta
app.use('/api/kits', require('./routes/kits'));
app.use('/api/sanitarios', require('./routes/sanitarios')); // Rotta per i sanitari

// Connect to MongoDB
const mongoUri = process.env.MONGO_URI;
// mongoose
//   .connect(mongoUri)
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.log(err,"database not connected"));
const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process with failure
  }
};

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

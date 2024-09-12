const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const authRoutes = require('./routes/auth');

app.use('/api/auth', authRoutes);

const postRoutes = require('./routes/posts');

app.use('/api/posts', postRoutes);


// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

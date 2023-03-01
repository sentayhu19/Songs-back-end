const mongoose = require('mongoose');
const { dbConfig } = require('../constants/index');
const connectDb = () => {
mongoose.connect(dbConfig, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error(err));
} 
module.exports= connectDb;  
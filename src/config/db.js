const mongoose = require('mongoose');
const { dbConfig } = require('../constants/index');
const connectDb = () => {
mongoose.connect(dbConfig, { useNewUrlParser: true, useUnifiedTopology: true, writeConcern: { w: 'majority' } })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error(err));
} 
module.exports= connectDb;  
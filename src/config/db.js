const mongoose = require('mongoose');
const { config } = require('dotenv');
config()

const { dbConfig } = require('../constants/index');
console.log("DB CONFIG URL: ", dbConfig)
const connectDb = () => {
mongoose.connect(dbConfig, { useNewUrlParser: true, useUnifiedTopology: true, writeConcern: { w: 'majority' } })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error(err));
} 
module.exports= connectDb;  
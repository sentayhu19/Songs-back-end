const mongoose = require('mongoose');
const uri = 'mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error(err));

module.exports = mongoose.connection;
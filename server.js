const express =  require ('express');
const app = express();
const port = 3000;
const  connectDb = require ('./src/config/db');
const songRoutes = require('./src/routes/index')

connectDb();
app.use('/v1', songRoutes);
app.listen(3000, () => console.log('Server is running on port 3000'));

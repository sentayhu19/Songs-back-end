const express =  require ('express');
const app = express();
const port = 3000;
const  connectDb = require ('./src/config/db');
const songRoutes = require('./src/routes/index');
const cors = require('cors')
app.use(cors());
connectDb();
app.use(express.json());
app.use('/v1', songRoutes);
app.listen(port, () => console.log('Server is running on port 3000'));
 
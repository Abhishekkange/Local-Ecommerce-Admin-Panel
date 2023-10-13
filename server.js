const express = require('express');
const app = express();
const AttributesRouter = require('./router/AttributeRouters');
const connectToMongoDb = require('./db');
const cors = require('cors');

const PORT = 5000;

app.use(express.json());

connectToMongoDb();


app.use(cors({
    origin: 'http://localhost:5500'
}));




//routes
app.use('/',AttributesRouter);



app.listen(PORT,()=>{

    console.log("Server started at PORT ${PORT}");



});
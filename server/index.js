/*import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';*/
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const connectDB = require('./db/connect');
const adminRoutes = require('./routes/admin');
const orderRoutes = require('./routes/orders');
/*import adminRoutes from './routes/admin.js';
import orderRoutes from './routes/orders.js';*/

const app = express();



app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/admin', adminRoutes);
app.use('/orders', orderRoutes);

const PORT = process.env.PORT || 5000;
const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT,console.log(`Server listening on port 5000`));
    }
    catch(error)
    {
        console.log(error);
    }
}

start();







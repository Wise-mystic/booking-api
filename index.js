import express from 'express';
import mongoose from 'mongoose';
import { bookingRouter } from './routes/all_routes.js';
import 'dotenv/config'
import cors from 'cors'

// connneting the data base
await mongoose.connect(process.env.MONGO_URI);


// Create an express app
const app = express();


// Use routes
app.use(cors());
app.use(express.json());
app.use(bookingRouter);



// LIsten for incoming requests
app.listen(3000, function(){
    console.log('App is listening on port 3000');
});

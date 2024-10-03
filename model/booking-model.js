// import mongoose from "mongoose";
import { Schema, model } from "mongoose"; 
//  or import { Schema } from "mongoose";

// const bookingSchema = new Schema
const bookingSchema = new Schema({

    firtName: {
        type: String,
        require: true
    },

    lastName: {
        type: String,
        require: true
    },
    

    sex: {
        type: String,
        enum: {
            values: ['male', 'female'],
        },
        require: true
    },

    seatNumber: {
        type: Number,
        unique: true,
        required: true
    },

    emails: {
        type: String,
        unique: true,
        required: true
    },


});


export const Booking = model('Booking', bookingSchema);

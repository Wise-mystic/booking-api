
import { Booking } from "../model/booking-model.js";

export const getAllBookings = async (req, res, next) => {
    try {
       const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        next(error)
    }
}

export const getOneBooking = (req, res, next) => {
    res.status(200).json('This is one booking');
}

export const postBooking = async (req, res, next) => {
    try {
        const newBooking = new Booking(req.body);
        const bookings = await newBooking.save();

        // await Booking.create(req.body);

        res.status(201).json("Booking was added!");

    } catch (error) {
        next(error);
    }
}

export const updateBooking = async (req, res, next) => {


    res.status(200).json(booking);

}

export const deleteBooking = (req, res) => {
    res.status(200).json('delete all bookings');
}


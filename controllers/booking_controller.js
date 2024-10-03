
import { Booking } from "../model/booking-model.js";

export const getAllBookings = async (req, res, next) => {
    try {
        await Booking.find(req.body);
        res.status(200).json('These are all bookings');
    } catch (error) {
        next(error)
    }
}

export const getOneBooking = (req, res, next) => {
    res.status(200).json('This is one booking');
}

export const postBooking = async (req, res, next) => {
    try {
        const newBooking = new Booking();
        const bookings = await newBooking.save(req.body);

        res.status(201).json(bookings);

    } catch (error) {
        next(error);
    }
}

export const updateBooking = async (req, res, next) => {


    res.status(200).json(bookings);

}

export const deleteBooking = (req, res) => {
    res.status(200).json('delete all bookings');
}


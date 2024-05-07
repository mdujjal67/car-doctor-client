import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import axios from "axios";

const BookingList = () => {

    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    const url = user ? `http://localhost:5000/booking?email=${user.email}` : '';
    useEffect(() => {
        // we can also fetch data using axios, here we don't need to convert data to the json format
        axios.get(url, {withCredentials:true})
        .then(res => {
            setBookings(res.data)
        })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, [url]);

    const handleDelete = id => {
        // swet alart
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
          })
        .then(result => {
            if(result.isConfirmed){
                fetch(`http://localhost:5000/booking/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: 'Success!',
                            text: 'Your booking removed!',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                          });
                          const remainingBooking = bookings.filter(booking => booking._id !==id);
                          setBookings(remainingBooking)
                    }
                })
            }
        })
    }


    const handleBookingConfirm = (id) => {
        fetch(`http://localhost:5000/booking/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm'
                const newBookings = [updated, ...remaining]
                setBookings(newBookings)
            }
        })
    }


    return (
        <div>
            <h2 className="text-2xl font-bold text-center mb-10">Your Bookings: {bookings.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-gray-100">
                            <th></th>
                            <th>Service Info.</th>
                            <th>Customer Info.</th>
                            <th>Service Cost</th>
                            <th>Booking Date</th>
                            <th>Booking Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                            key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                            handleBookingConfirm={handleBookingConfirm}
                            ></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingList;
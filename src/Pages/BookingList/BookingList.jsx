import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const BookingList = () => {

    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    const url = user ? `http://localhost:5000/booking?email=${user.email}` : '';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, []);

    const handleDelete = id => {
        // swet alart
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
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
                            text: 'Your booking deleted!',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                          });
                          const remainingBooking = bookings.filter(booking => booking._id !== booking.id);
                          setBookings(remainingBooking)
                    }
                })
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
                        <tr>
                            <th>Service Name</th>
                            <th>Customer Name</th>
                            <th>Price</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                            key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                            ></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingList;
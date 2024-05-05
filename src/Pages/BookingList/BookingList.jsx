import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const BookingList = () => {

    const {user} = useContext(AuthContext)
    const [booking, setBooking] = useState([])

    const url = user ? `http://localhost:5000/booking?email=${user.email}` : '';
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setBooking(data))
    },[])


    return (
        <div>
            <h2 className="text-2xl font-bold text-center">Your Bookings: {booking.length}</h2>
        </div>
    );
};

export default BookingList;
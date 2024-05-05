import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import PropTypes from "prop-types"

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {

    

    const { user } = useContext(AuthContext)
    const { _id, name, title, price, date, img , status} = booking
    return (
            <tr>
                <th>
                    <div className="size-7">
                        <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-xs btn-outline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="">{title}</div>
                        </div>
                    </div>
                </td>
                <td className="flex gap-1 items-center mt-2">
                    <div className="w-10 rounded-full">
                        <img referrerPolicy="no-referrer" src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} alt="" className="bg-gray-100 w-8 rounded-full" />
                    </div>
                    {name}
                </td>
                <td>{price}</td>
                <td>{date}</td>
                <th>
                    { status ==='confirm' ? <span className="text-primary font-semibold">Confirmed</span> :
                        <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs bg-[#ff3811] hover:bg-gray-200 hover:text-black text-white">Please Confirm</button> 
                    }
                </th>
            </tr>
    );
};
BookingRow.propTypes = {
    booking: PropTypes.object,
    handleDelete: PropTypes.func,
    handleBookingConfirm:PropTypes.func
};
export default BookingRow;
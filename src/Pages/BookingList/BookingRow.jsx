import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import PropTypes from "prop-types"

const BookingRow = ({ booking }) => {
    const {user} = useContext(AuthContext)
    const { name, title, price, date, img } = booking
    return (
        <div>
            {/* row 1 */}
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{title}</div>
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
                    <button className="btn btn-ghost btn-xs bg-[#ff3811] hover:bg-gray-200 hover:text-black text-white">details</button>
                </th>
            </tr>
        </div>
    );
};
BookingRow.propTypes = {
    booking: PropTypes.object
};
export default BookingRow;
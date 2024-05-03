import { FaArrowRightLong } from "react-icons/fa6";
import PropTypes from 'prop-types';
const ServicesCard = ({ service }) => {
    const { title, img, price } = service
    return (
        <div className="card card-compact bg-base-100 shadow-lg border p-5 aspect-h-3 w-full">
            <figure><img src={img} alt="Shoes" className="hover:scale-110 transition duration-300 ease-in-out transform" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{title}</h2>
                <p className="font-bold text-xl text-[#ff3811]">Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn"><FaArrowRightLong className="text-[#ff3811]"/>
                    </button>
                </div>
            </div>
        </div>
    );
};
ServicesCard.propTypes = {
    service: PropTypes.object
};
export default ServicesCard;
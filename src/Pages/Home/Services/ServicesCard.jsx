import { FaArrowRightLong } from "react-icons/fa6";
const ServicesCard = ({ service }) => {
    const { title, img, price } = service
    return (
        <div className="card card-compact bg-base-100 shadow-lg border p-6 w-full">
            <figure><img src={img} alt="Shoes" /></figure>
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

export default ServicesCard;
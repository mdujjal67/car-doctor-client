import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const service = useLoaderData();
    const { title, _id, price } = service
    return (
        <div>
            <h2>Service Book: {title}</h2>
            <form className="card-body bg-gray-100 lg:p-[100px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    <div className="form-control">
                        <input type="text" placeholder="First Name" className="input" required />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Last Name" className="input" required />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Your Phone" className="input" required />
                    </div>
                    <div className="form-control">
                        <input type="email" placeholder="Your Email" className="input" required />
                    </div>
                </div>
                <div className="w-full form-control py-6">
                    <textarea placeholder="Bio" className="textarea textarea-lg block w-full" ></textarea>
                </div>
                <div className="form-control">
                    <input type="submit" className="btn btn-block bg-[#ff3811] text-white hover:text-gray-700 " value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;
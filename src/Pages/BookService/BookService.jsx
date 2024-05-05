import { useLoaderData } from "react-router-dom";
import checkout from '../../assets/images/checkout/checkout.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const BookService = () => {
    const service = useLoaderData();
    const {user} = useContext(AuthContext)
    const { title, price, img } = service

    const handleCheckout = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const price = form.price.value;
        const message = form.textarea.value;
        const bookingInfo = {email, name, price, message, title, img, date}
        console.log(bookingInfo);

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
           if(data.insertedId){
                toast.success('Booking Successful!');
                form.reset()
           }
           
        })
    }
    return (
        <div>
            {/* <h2>Service Book: {title}</h2> */}
            <div className="mb-[100px] relative">
                <img src={checkout} className="w-full " alt="" />
                <div className="absolute flex items-center h-[336px] left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-full rounded-lg"></div>
                <h2 className="absolute left-[100px] top-[130px] text-white text-5xl font-bold">Check Out</h2>
            </div>
            <form onSubmit={handleCheckout} className="card-body bg-gray-100 lg:p-[100px]">
                    <h2 className="text-2xl font-bold text-center mb-10">Service: {title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    <div className="form-control">
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="Name" className="input" required />
                    </div>
                    <div className="form-control">
                        <input type="date" name="date" placeholder="Date"  className="input" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name="price" defaultValue={'$' +price} placeholder="price" className="input" required readOnly />
                    </div>
                    <div className="form-control">
                        <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input" required />
                    </div>
                </div>
                <div className="w-full form-control py-6">
                    <textarea placeholder="Your Message" name="textarea" className="textarea textarea-lg block w-full h-[250px]" ></textarea>
                </div>
                <div className="form-control">
                    <input type="submit" className="btn btn-block bg-[#ff3811] text-white hover:text-gray-700 " value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default BookService;
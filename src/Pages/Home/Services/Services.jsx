import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    }, [])

    return (
        <div className="my-[100px]">
            <div className="mb-12">
                <h2 className="text-center text-xl font-bold text-orange-600">Services</h2>
                <h1 className="text-center text-5xl font-bold py-5">Our Service Area</h1>
                <p className="mx-auto text-center lg:w-[720px] text-gray-600">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                    services.map(service => <ServicesCard
                    key={services._id}
                    service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;
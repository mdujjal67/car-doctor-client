import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"
const About = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="lg:w-1/2 relative">
                        <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute right-7 -bottom-10 border-4 border-white" />
                    </div>
                    <div className="lg:w-1/2 lg:pr-28">
                        <p className="text-[#ff3811] font-bold text-xl">About Us</p>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <p className="py-5">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>
                        <button className="btn btn-error text-white">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
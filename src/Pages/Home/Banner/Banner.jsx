import img1 from "../../../assets/images/banner/1.jpg"
import img2 from "../../../assets/images/banner/2.jpg"
import img3 from "../../../assets/images/banner/3.jpg"
import img4 from "../../../assets/images/banner/4.jpg"
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full mb-[100px]">
                <div id="slide1" className="carousel-item relative w-full h-[600px] object-cover">
                    <img src={img1} className="w-full rounded-xl object-cover" />
                    <div className="absolute flex items-center space-y-7 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-full rounded-xl">
                       <div className="text-white pl-10 w-[480px]">
                            <h1 className="text-white text-7xl font-bold">Affordable Price For Car Servicing</h1>
                            <p className="text-white py-8 text-2xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-error mr-5 text-white">Discover More</button>
                                <button className="btn btn-outline btn-warning border-white text-white">Latest Project</button>
                            </div>
                        </div> 
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5 hover:bg-orange-600 hover:text-white text-xl hover:border-0">❮</a>
                        <a href="#slide2" className="btn btn-circle hover:bg-orange-600 hover:text-white text-xl hover:border-0">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[600px] object-cover">
                    <img src={img2} className="w-full rounded-xl object-cover" />
                    <div className="absolute flex items-center space-y-7 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-full rounded-xl">
                       <div className="text-white pl-10 w-[480px]">
                            <h1 className="text-white text-7xl font-bold">Affordable Price For Car Servicing</h1>
                            <p className="text-white py-8 text-2xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-error mr-5 text-white">Discover More</button>
                                <button className="btn btn-outline btn-warning border-white text-white">Latest Project</button>
                            </div>
                        </div> 
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5 hover:bg-orange-600 hover:text-white text-xl hover:border-0">❮</a>
                        <a href="#slide3" className="btn btn-circle hover:bg-orange-600 hover:text-white text-xl hover:border-0">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[600px] object-cover">
                    <img src={img3} className="w-full rounded-xl object-cover" />
                    <div className="absolute flex items-center space-y-7 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-full rounded-xl">
                       <div className="text-white pl-10 w-[480px]">
                            <h1 className="text-white text-7xl font-bold">Affordable Price For Car Servicing</h1>
                            <p className="text-white py-8 text-2xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-error mr-5 text-white">Discover More</button>
                                <button className="btn btn-outline btn-warning border-white text-white">Latest Project</button>
                            </div>
                        </div> 
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5 hover:bg-orange-600 hover:text-white text-xl hover:border-0">❮</a>
                        <a href="#slide4" className="btn btn-circle hover:bg-orange-600 hover:text-white text-xl hover:border-0">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-[600px] object-cover">
                    <img src={img4} className="w-full rounded-xl object-cover" />
                    <div className="absolute flex items-center space-y-7 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-full rounded-xl">
                       <div className="text-white pl-10 w-[480px]">
                            <h1 className="text-white text-7xl font-bold">Affordable Price For Car Servicing</h1>
                            <p className="text-white py-8 text-2xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-error mr-5 text-white">Discover More</button>
                                <button className="btn btn-outline btn-warning border-white text-white">Latest Project</button>
                            </div>
                        </div> 
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5 hover:bg-orange-600 hover:text-white text-xl hover:border-0">❮</a>
                        <a href="#slide1" className="btn btn-circle hover:bg-orange-600 hover:text-white text-xl hover:border-0">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
// import { FaEye, FaEyeSlash } from "react-icons/fa6";
import loginImg from '../../assets/images/login/login.svg'
import { Link } from "react-router-dom";
const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault()
    }

    return (
        <div>
            <div className="hero min-h-screen bg-gray-50 container mb-[80px] mx-auto">
                <div className="hero-content flex-row flex gap-20">
                    <div className="lg:w-1/2">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card lg:w-1/2 w-[300px] shadow-lg border bg-base-100">
                        <h1 className="text-2xl text-center font-bold mt-10">Login</h1>
                        <form onSubmit={handleLogin} className="card-body">

                            {/* This is for Email field */}
                            <label>Email</label>
                            <div className="form-control">
                                <input type="email" name="email" placeholder="Email" className="input input-bordered -mt-1 mb-3"></input>
                            </div>

                            {/* This is for Password field*/}
                            <label className="">Password</label>
                            <div className="form-control">
                                <input
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered -mt-1 " />

                                {/* input field error show */}
                                {/* <div>
                                    {
                                        loginError && <p className="text-[12px] text-red-500">{loginError}</p>
                                    }
                                </div> */}
                                <label className="label">
                                    <Link to='/forgot-password' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                <label className="">
                                    <p className="text-[14px] w-[220px] mx-auto mt-2 text-[#00000082]">Do not have an account? <Link to='/register' className="hover:link font-semibold text-[14px] text-[#22be0a]">Sign Up</Link>
                                    </p>
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <button className="btn border-none bg-[#ff3811] hover:bg-gray-400 text-white">Login</button>
                            </div>
                        </form>

                        {/* This is for social login buttons */}
                        <div className="flex items-center -mt-3">
                            <hr className="w-full ml-8" />
                            <p className="px-4 text-[#00000082]">Or</p>
                            <hr className="w-full mr-8" />
                        </div>
                        <div className="form-control mt-3 px-8 flex flex-row gap-5 mx-auto items-center pb-10">
                            <div className="bg-gray-100 hover:bg-gray-200 w-8 h-8 items-center mx-auto rounded-full">
                                <IoLogoGithub className="text-black text-[20px] mt-1 mx-auto items-center" />
                            </div>
                            <div className="bg-gray-100 hover:bg-gray-200 w-8 h-8 items-center mx-auto rounded-full">
                                <FcGoogle className="text-black text-[20px] mt-1 mx-auto items-center" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
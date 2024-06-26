import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
// import { FaEye, FaEyeSlash } from "react-icons/fa6";
import loginImg from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
// import axios from "axios";
const Login = () => {

    const { signIn , googleLogin} = useContext(AuthContext);
    
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const userInfo = {email, password}
        console.log(userInfo);

        signIn(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            toast.success('Login Successful!');
            form.reset();
            // user navigation shifted to the axios point for success token
            navigate(location?.state ? location?.state : '/')

            

            // get access token ( first install axios packages, send only email as token & axios.post to backend with loggedInUser)
            // const loggedInUser = {email};
            // axios.post('http://localhost:5000/jwt', loggedInUser, {withCredentials:true})
            // .then(res => {
            //     console.log(res.data)
            //     if(res.data.success){
            //         navigate(location?.state ? location?.state : '/')
            //     }
            // })


        })
        .catch((error) => {
            console.log(error)
            return toast.error('Please try again!');
        });
        
    }
    const handleSocialLogin = (socialProvider) => {
        socialProvider()
            .then(result => {
                if (result.user) {
                    navigate(location?.state ? location?.state : '/')
                }
            })
    }
    //   for google login
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                toast.success('Login Successful!');
                navigate(location?.state ? location?.state : '/')
            })
        
       
    }

    return (
        <div>
            <div className="hero min-h-screen bg-gray-50 container mb-[80px] mx-auto py-10">
                <div className="hero-content flex-col lg:flex-row flex gap-20">
                    <div className="lg:w-1/2">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card lg:w-1/2 w-[300px] shadow-lg border bg-base-100">
                        <h1 className="text-2xl text-center font-bold mt-10">Login</h1>
                        <form onSubmit={handleLogin} className="card-body">

                            {/* This is for Email field */}
                            <label>Email</label>
                            <div className="form-control">
                                <input type="email" name="email" placeholder="Your Email" className="input input-bordered -mt-1 mb-3"></input>
                            </div>

                            {/* This is for Password field*/}
                            <label className="">Confirm Password</label>
                            <div className="form-control">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Confirm Password"
                                    className="input input-bordered -mt-1 " />

                                <label className="label">
                                    <Link to='/forgot-password' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                <label className="">
                                    <p className="text-[14px] w-[220px] mx-auto mt-2 text-[#00000082]">Do not have an account? <Link to='/signUp' className="hover:link font-semibold text-[14px] text-[#ff3811]">Sign Up</Link>
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
                                <button><IoLogoGithub className="text-black text-[20px] ml-[6px] mt-[6px] mx-auto items-center" /></button>
                            </div>
                            <div className="bg-gray-100 hover:bg-gray-200 w-8 h-8 items-center mx-auto rounded-full">
                                <button onClick={()=>handleSocialLogin(handleGoogleLogin)}><FcGoogle className="text-black text-[20px] ml-[6px] mt-[6px] mx-auto items-center" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg"

const NavBar = () => {
    const navItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/services">Services</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 pb-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <img src={logo} alt="" />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                   <Link to="/"><img src={logo} alt="logo-image" className="w-24 "/></Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-outline btn-warning">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;

import { NavLink } from "react-router-dom";
import user from "/user.png";





const Navbar = () => {

    const links = <>
        <li><NavLink to='/'
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#eb1c3a] font-bold" : ""
          }
            >Home</NavLink></li>
        <li><NavLink to='/add-product'
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#eb1c3a] font-bold" : ""
          }
            >Add Product</NavLink></li>
        <li><NavLink to='/my-cart'
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#eb1c3a] font-bold" : ""
          }
            >My Cart</NavLink></li>
       

    </>

 

    return (


        <div className="navbar bg-[#363636] text-white px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-base-100 w-52">
                        {links}
                    </ul>
                </div>
                <a className=" normal-case text-xl">TechBay</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-5 px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <img className="w-10 h-10 mr-5" src={user} alt="" />
                <NavLink to="/login" className="hover:text-[#eb1c3a]">Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;
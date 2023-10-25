import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContex } from "../../firebase/AuthProvider";


const Navber = () => {


  const { user, logOut } = useContext(AuthContex)


  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire("Good job!", "User Logged Out Successfully!", "success"); // Use Swal.fire() instead of Swal()
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const navLink = <>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/addProduct'}>Add Product</NavLink></li>
    <li><NavLink to={'/myCart'}>My Cart</NavLink></li>
    {user ? <li><NavLink to={'/login'}>Login</NavLink></li> :
      <li><NavLink to={'/register'}>Register</NavLink></li>}
  </>


  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLink}
          </ul>
        </div>
        <NavLink to={'./'} className=" normal-case md:text-xl text-lg"><img className="w-[200px] h-[50px] " src="https://i.postimg.cc/DfdqrM2W/Gadget-Galaxy-1.png" alt="" /></NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold">
          {navLink}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <>
            <span className="ml-2 md:text-xl text-sm">{user.displayName}</span>
            <img className="w-[30px] ml-1 rounded-full" src={user.photoURL} alt="photo" />

            <a onClick={handleSignOut} className="btn text-lg">Sign Out</a>
          </> :
            <Link to={'/login'}>
              <button className="btn text-lg">Login</button>
            </Link>
        }
      </div>
    </div>
  );
};

export default Navber;

import { Outlet } from "react-router-dom";
import Navber from "../pages/Home/Navber";



const Root = () => {
    return (
        <div className="max-w-7xl md:px-10 mx-5">
            <Navber></Navber>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;
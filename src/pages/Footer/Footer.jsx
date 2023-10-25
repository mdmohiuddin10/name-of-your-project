import { NavLink } from "react-router-dom";
import { FaLocationArrow, FaEnvelope, FaPhoneAlt } from "react-icons/fa";



const Footer = () => {
    return (
        <div className="mt-10 bg-purple-500 mb-10">
            <footer className="grid gap-5 md:grid-cols-3 grid-cols-1 px-5 bg-purple-500 text-white pt-10">
                <div>
                    <aside className="px-2">

                        <p className="text-xl font-semibold mb-2">Gadget Galaxy</p>
                        <p className="text-sm mb-2">Multi Branded Electronics Shop </p>
                        <h2 className="flex gap-2 items-center mb-2"><span><FaLocationArrow></FaLocationArrow></span>
                            21, 22 Bipony Bithan Shopping Complex
                        </h2>
                        <h2 className="flex gap-2 items-center mb-2"><span><FaLocationArrow></FaLocationArrow></span>
                            21 Chawkbazar, Chittagong, Bangladesh
                        </h2>
                        <h2 className="flex mb-2 gap-2 items-center"><span><FaEnvelope></FaEnvelope></span>
                            <a href="">hmmohiuddinctg1997<br></br>@gmail.com</a>
                        </h2>
                        <h2 className="flex gap-2 items-center"><span><FaPhoneAlt></FaPhoneAlt></span>
                            <a href="">01836-414220, 01580-821078</a>
                        </h2>
                    </aside>
                </div>
                <div className="px-2">
                    <nav>
                        <header className="footer-title">Services</header>
                        <li className="mb-2"><NavLink to={'/mobile'}>Smart Phone</NavLink></li>
                        <li className="mb-2"><NavLink to={'/laptop'}>Laptop and Desktop</NavLink></li>
                        <li className="mb-2"><NavLink to={'/watch'}>Smart Watch</NavLink></li>
                        <li className="mb-2"><NavLink to={'/myCart'}>My Cart</NavLink></li>
                        <li className="mb-2"><NavLink to={'/login'}>My Account</NavLink></li>
                    </nav>
                </div>

                <div className="px-2">
                    <nav>
                        <header className="footer-title">Legal</header>
                        <li className="mb-2"><a className="link link-hover">Terms of use</a></li>
                        <li className="mb-2"><a className="link link-hover">Privacy policy</a></li>
                        <li className="mb-2"><a className="link link-hover">Cookie policy</a></li>
                    </nav>
                </div>



            </footer>

            <div className="text-center text-white mt-5 px-2 pb-10">
                <p>Copyright © 2023 - All right reserved by Gadget Galaxy</p>
            <div className="flex gap-3 w-full justify-center mt-5 mx-auto">
                <img className="w-[100px] h-[40px]" src="https://i.postimg.cc/63DRKTj4/download.png" alt="" />
                <img className="w-[100px] h-[40px]" src="https://i.postimg.cc/RZNM7GV9/download-1.png" alt="" />
                <img className="w-[100px] h-[40px]" src="https://i.postimg.cc/m264gM3n/download-2.png" alt="" />
                <img className="w-[100px] h-[40px]" src="https://i.postimg.cc/tggpq5w8/images.jpg" alt="" />
                <img className="w-[100px] h-[40px]" src="https://i.postimg.cc/66CJNgTy/86c19792690133-Y3-Jvc-Cw5-OTks-Nzgy-LDAs-Nj-Y.jpg" alt="" />
            </div>
            </div>
            

        </div>
    );
};

export default Footer;
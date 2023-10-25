import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart, AiFillEye } from "react-icons/ai";
import { AuthContex } from "../../../firebase/AuthProvider";

const Laptop = () => {
    const [product, setProduct] = useState([]);
    const [isShow, setIsShow] = useState(false);

    const { user } = useContext(AuthContex)
    const email = user?.email
    console.log(email);

    useEffect(() => {
        fetch('https://assignment-10-r7m717nv8-mdmohiuddin10.vercel.app/addProduct')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);



    const filteredProducts = product.filter((productItem) => productItem.type === "Laptop");

    const displayedProducts = isShow ? filteredProducts : filteredProducts.slice(0, 8);

    return (
        <div className="mt-10">
               <img className="w-3/4 mx-auto mb-20" src="https://i.postimg.cc/fLcFcQW2/super-sale-banner-set-realistic-devices-smartphone-tablet-laptop-computer-colour-background-super-sa.webp" alt="" />
            {/* <Marquee> */}
                <div>
                    <h2 className="text-3xl mb-5  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                text-transparent bg-clip-text font-bold">Flase Sale!! Laptop Enjoy Upto 10% Discount</h2>
                </div>
            {/* </Marquee> */}
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 mx-auto">
                {displayedProducts.map(productItem => (
                    <div key={productItem._id} className="card bg-base-100 shadow-xl">
                        <figure><img className="w-[300px] h-[300px] mt-3" src={productItem.photo} alt="Laptop" /></figure>
                        <div className="card-body">
                            <h2 className="text-xl font-semibold mb-3 text-center">{productItem.name}</h2>
                            <div className="flex justify-around">
                                <h2 className="card-title">{productItem.brandName}</h2>
                                <h2 className="card-title">{productItem.type}</h2>
                            </div>
                            <div className="flex mt-3 justify-around">
                                <h2 className="text-xl font-semibold text-blue-700">{productItem.price}</h2>
                                <h2 className="text-xl font-semibold">{productItem.rating}</h2>
                            </div>
                            <div className="card-actions mt-3 justify-around">
                                <NavLink to={`/productDetail/${productItem._id}`}>
                                    <button className="btn bg-purple-500 btn-primary">Details<span className="text-2xl font-semibold"><AiFillEye></AiFillEye></span></button>
                                </NavLink>
                                <NavLink to={`/productDetail/${productItem._id}`}>
                                    <button className="btn bg-purple-500 btn-primary">Add to cart<span className="text-2xl font-semibold"><AiOutlineShoppingCart></AiOutlineShoppingCart></span></button>
                                </NavLink>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full mx-auto lg:ml-[640px] md:[350px]">
            {filteredProducts.length > 8 && (
                <button
                    className="bg-[#FF444A] mt-10 text-center mb-20 px-2 py-2 rounded-lg text-white font-semibold w-[100px] mx-auto"
                    onClick={() => setIsShow(!isShow)}
                >
                    {isShow ? "Show Less" : "See All"}
                </button>
            )}
            </div>
        </div>
    );
};

export default Laptop;

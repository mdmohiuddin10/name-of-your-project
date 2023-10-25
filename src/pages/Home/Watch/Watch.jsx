import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { AuthContex } from "../../../firebase/AuthProvider";

const Watch = () => {
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



    const filteredProducts = product.filter((productItem) => productItem.type === "Watch");

    const displayedProducts = isShow ? filteredProducts : filteredProducts.slice(0, 8);

    return (
        <div className="mt-10">
        <img className="md:w-3/4 w-full mx-auto mb-20" src="https://i.postimg.cc/5yDSs1qd/0030285-Shera-Daame-Shera-Smartwatch-Desktop-View.jpg" alt="" />
     {/* <Marquee> */}
         <div>
             <h2 className="md:text-3xl text-xl mb-5  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
         text-transparent bg-clip-text font-bold">Flase Sale!! Smart Watch Enjoy Upto 10% Discount</h2>
         </div>
     {/* </Marquee> */}
     <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 mx-auto">
                    {displayedProducts.map(productItem => (
                        <div key={productItem._id} className="card bg-base-100 shadow-xl">
                            <figure><img className="lg:w-[300px] md:w-[250px] w-[200px] h-[250px] md:h-[250px] lg:h-[300px] mt-3" src={productItem.photo} alt="Laptop" /></figure>
                            <div className="card-body">
                                <h2 className="md:text-xl text-md font-semibold mb-3 text-center">{productItem.name}</h2>
                                <div className="flex gap-2 justify-around">
                                    <h2 className="card-title md:text-xl text-sm">{productItem.brandName}</h2>
                                    <h2 className="card-title md:text-xl text-sm">{productItem.type}</h2>
                                </div>
                                <div className="flex mt-3 gap-2 justify-around">
                                    <h2 className="text-xl font-semibold text-blue-700">{productItem.price}</h2>
                                    <h2 className="text-xl font-semibold">{productItem.rating}</h2>
                                    {/* <StarRating rating={productItem.rating} /> */}
                                </div>
                                <div className="card-actions mt-3 justify-around">
                                    <NavLink to={`/productDetail/${productItem._id}`}>
                                        <button className="btn bg-purple-500 btn-primary">Details<span className="md:text-2xl text-md font-semibold"><AiFillEye></AiFillEye></span></button>
                                    </NavLink>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full mx-auto ml-[150px] lg:ml-[640px] md:ml-[350px]">
                {filteredProducts.length > 8 && (
                    <button
                        className="bg-[#FF444A] mt-10 text-center mb-20 px-2 py-2 rounded-lg text-white font-semibold w-[100px]"
                        onClick={() => setIsShow(!isShow)}
                    >
                        {isShow ? "Show Less" : "See All"}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Watch;

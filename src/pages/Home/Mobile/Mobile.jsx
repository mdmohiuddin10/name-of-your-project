import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart, AiFillEye } from "react-icons/ai";
import Swal from "sweetalert2";
import { AuthContex } from "../../../firebase/AuthProvider";
// import {StarRating} from "../Rating/StarRating";

const Mobile = () => {
    const [product, setProduct] = useState([]);
    const [isShow, setIsShow] = useState(false);

    const { user } = useContext(AuthContex)
    const email = user?.email
    console.log(email);

    useEffect(() => {
        fetch('http://localhost:5001/addProduct')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);


    const addToCartButton = () => {
        console.log('clicked');
        const data = {
            product: product,
            email: email,
        };

        fetch('http://localhost:5001/addToCart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Added Product Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });
                }
            });
    };

    const filteredProducts = product.filter((productItem) => productItem.type === "Mobile");

    const displayedProducts = isShow ? filteredProducts : filteredProducts.slice(0, 8);

    return (
        <div className="mt-5">
            <img className="w-3/4 mx-auto mb-5" src="https://i.postimg.cc/rmwS8vNx/Order.png" alt="" />
            {/* <Marquee> */}
                <div>
                    <h2 className="text-3xl  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                text-transparent bg-clip-text font-bold">Flase Sale!! Smart Phone Enjoy Upto 10% Discount</h2>
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
                                {/* <StarRating rating={productItem.rating} /> */}
                            </div>
                            <div className="card-actions mt-3 justify-around">
                                <NavLink to={`/productDetail/${productItem._id}`}>
                                    <button className="btn bg-purple-500 btn-primary">Details<span className="text-2xl font-semibold"><AiFillEye></AiFillEye></span></button>
                                </NavLink>
                                <button onClick={addToCartButton} className="btn bg-purple-500 btn-primary">Add to cart<span className="text-2xl font-semibold"><AiOutlineShoppingCart></AiOutlineShoppingCart></span></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {filteredProducts.length > 8 && (
                <button
                    className="bg-[#FF444A] mt-10 text-center mb-20 px-2 py-2 rounded-lg text-white font-semibold w-[100px] mx-auto"
                    onClick={() => setIsShow(!isShow)}
                >
                    {isShow ? "Show Less" : "See All"}
                </button>
            )}
        </div>
    );
};

export default Mobile;

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Mobile = () => {
    
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('http://localhost:5001/addProduct')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])

    const mobileProducts = product.filter((productItem) => productItem.type === "Mobile");
    console.log(mobileProducts);

    return (
        <div className="mt-20">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 mx-auto">
                {mobileProducts.map(productItem => (
                    <div key={productItem._id} className="card bg-base-100 shadow-xl">
                        <figure><img className="w-[300px] h-full mt-3" src={productItem.photo} alt="Shoes" /></figure>
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
                                    <button className="btn bg-purple-500 btn-primary">Details</button>
                                </NavLink>
                                <NavLink to={`/updateForm/${productItem._id}`}>
                                    <button className="btn bg-purple-500 btn-primary">Add to cart</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mobile;

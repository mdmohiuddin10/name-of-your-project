import { useContext, useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContex } from "../../firebase/AuthProvider";

const ProductDetail = () => {

    const { id } = useParams();
    const { user } = useContext(AuthContex)
    const email = user?.email
    console.log(email);

    const [product, setProduct] = useState();
    const products = useLoaderData();
 

    useEffect(() => {
        const findProduct = products?.find(product => product._id === id);
        setProduct(findProduct);
    }, [id, products]);

    // console.log(product);

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
      

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className="" src={product?.photo} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product?.name}</h2>
                    <h2 className="card-title">{product?.brandName}</h2>
                    <p>{product?.description}</p>
                    <div className="card-actions justify-end">
                   <button onClick={addToCartButton}  className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

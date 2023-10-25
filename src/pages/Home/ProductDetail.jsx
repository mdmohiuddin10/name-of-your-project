import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContex } from "../../firebase/AuthProvider";

const ProductDetail = () => {

  const { id } = useParams();
  const { user } = useContext(AuthContex)
  const email = user?.email
  // console.log(email);

  const [product, setProduct] = useState();
  const products = useLoaderData();

  console.log(product);


  useEffect(() => {
    const findProduct = products?.find(product => product._id === id);
    setProduct(findProduct);
    console.log(findProduct);
  }, [id, products]);

  // console.log(product);

  const addToCartButton = () => {
    const data = {
      product: product,
      email: email,
    };

    fetch('https://assignment-10-r7m717nv8-mdmohiuddin10.vercel.app/addToCart', {
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
      <div className="md:w-2/4 mx-auto mt-20 bg-[#F4F3F0] px-5 py-5 justify-end items-center">
      <div className="md:flex flex-row-reverse ">
        <div className="flex">
          <img className="w-[300px] h-full" src={product?.photo} alt="Album" />
        </div>
        <div className="flex-1">
          <h2 className="card-title mb-3">{product?.name}</h2>
          <h2 className="card-title mb-3">Brand: {product?.brandName}</h2>
          <p className="mb-3"><span className="text-xl font-semibold">Description: </span>{product?.description}</p>
          <p className="mb-3 text-xl font-semibold">Price: {product?.price}</p>
          <div className="card-actions justify-end">
            <button onClick={addToCartButton} className="btn bg-purple-500 btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProductDetail;

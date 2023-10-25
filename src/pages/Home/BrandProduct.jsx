import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Banner from "./Banner";

// import StarRating from "./Rating/StarRating";




const BrandProduct = () => {

  const { brandName } = useParams()
  const [product, setProduct] = useState()


  const products = useLoaderData()
  // console.log(products);
  useEffect(() => {

    const findProduct = products?.filter(product => product.brandName === brandName)
    setProduct(findProduct)
  }, [brandName, products])



  return (
    <div className="">
      {/* banner start */}

      {/* banner end */}
      {product && product.length > 0 ? (
        <div>
          <Banner></Banner>
          <div className="grid lg:grid-cols-4 md:px-10 mt-10 md:grid-cols-3 grid-cols-2 gap-5 mx-auto">
            {product?.map(productItem => (
              <div key={productItem._id} className="card bg-base-100 shadow-xl">
                <figure><img className="w-[300px] h-full mt-3" src={productItem.photo} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="md:text-xl text-md font-semibold mb-3 text-center">{productItem.name}</h2>
                  <div className="flex gap-3 justify-around">
                    <h2 className="font-semibold md:text-xl text-md">{productItem.brandName}</h2>
                    <h2 className="font-semibold md:text-xl text-md">{productItem.type}</h2>
                  </div>
                  <div className="flex gap-3 mt-3 justify-around">
                    <h2 className="text-xl font-semibold text-blue-700">{productItem.price}</h2>
                    <h2 className="text-xl font-semibold">{productItem.rating}</h2>
                    {/* <StarRating rating={productItem.rating} /> */}
                  </div>
                  <div className="card-actions mt-3 justify-around">
                    <NavLink to={`/productDetail/${productItem._id}`}>
                      <button className="btn bg-purple-500 btn-primary">Details</button>
                    </NavLink>
                    <NavLink to={`/updateForm/${productItem._id}`}>
                      <button className="btn bg-purple-500 btn-primary">Update</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>) : (
        <div className="">
          <h2 className="text-3xl font-semibold text-center mt-10">No Products available</h2>
          <img className="w-2/3justify-center mx-auto" src="https://i.postimg.cc/DfpMdnm4/2869599-6011.jpg" alt="" />
        </div>
      )
      }
    </div>);
};

export default BrandProduct;







import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";

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
    <div>
      {product && product.length > 0 ? (
        <div className="grid grid-cols-3 gap-5 mx-auto">
          {product?.map(productItem => (
            <div key={productItem._id} className="card bg-base-100 shadow-xl">
              <figure><img src={productItem.photo} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">{productItem.name}</h2>
                <h2 className="card-title">{productItem.brandName}</h2>
                <h2 className="card-title">{productItem.type}</h2>
                <div className="flex">
                  <p>{productItem.price}</p>
                  <p>{productItem.rating}</p>
                </div>
                <div className="card-actions justify-end">
                  <NavLink to={`/productDetail/${productItem._id}`}>
                    <button className="btn btn-primary">Details</button>
                  </NavLink>

                  <NavLink to={`/updateForm/${productItem._id}`}>
                    <button className="btn btn-primary">Update</button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>) : (
        <p>No product</p>
      )
      }
    </div>
  );

};

export default BrandProduct;





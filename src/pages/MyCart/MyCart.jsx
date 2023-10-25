import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContex } from "../../firebase/AuthProvider";

const MyCart = () => {

  const fullProduct = useLoaderData()

  const {user} = useContext(AuthContex)
      const email = (user?.email);

const newProuct = fullProduct.filter(setProduct => setProduct.email === email)
console.log(newProuct);


  return (
    <div className="md:w-2/6 mx-auto mt-10">
 
       <h3 className="text-2xl font-semibold text-center mb-5">{newProuct[0]?.product.name}</h3>
      <img src={newProuct[0]?.product.photo} alt="" />
      <h3 className="text-2xl font-semibold text-center">price: {newProuct[0]?.product.price}</h3>
      <h2 className="text-2xl font-semibold text-center mt-5">Thanks For Your Shopping</h2> 
    
    </div>
  );
};

export default MyCart;

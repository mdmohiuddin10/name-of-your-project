// import { useContext, useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";
// import { AuthContex } from "../../firebase/AuthProvider";

import { useLoaderData } from "react-router-dom";
import { AuthContex } from "../../firebase/AuthProvider";
import { useContext } from "react";

// const MyCart = () => {
//     const addedProduct = useLoaderData();
//     console.log(addedProduct);
   
//     const {user} = useContext(AuthContex)
//     const email = (user?.email);
    

//     const [product, setProduct] = useState()
//     // console.log(product);


//   useEffect(() => {

//     const showProduct = addedProduct?.filter(products => products.email === email)
//     setProduct(showProduct)
//     console.log(showProduct);
   
//   }, [addedProduct, email])


//     const handleDelete = (_id) => {
//         console.log(_id);
//         // swal
//         Swal.fire({
//             title: 'Are you sure?',
//             text: "You won't be able to revert this!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, delete it!'
//           }).then((result) => {
//             if (result.isConfirmed) {
//                 console.log('delete');

//             fetch(`http://localhost:5001/addToCart/${_id}`,{
//                 method: 'DELETE'
//             })
//             .then(res=> res.json())
//             .then(data=> {
//                 console.log(data);
//                 if(data.deletedCount > 0){
//                     Swal.fire(
//                         'Deleted!',
//                         'Your file has been deleted.',
//                         'success'
//                       )
//                 }
//             })
            
//             }
//           })
//     }

//     return (
//         <div>
      
//         {product && product.length > 0 ? (
//         <div className="grid grid-cols-3 gap-5 mx-auto">
//           {product?.map(productItem => (
//             <div key={productItem._id} className="card bg-base-100 shadow-xl">
//               <figure><img src={productItem.photo} alt="Shoes" /></figure>
//               <div className="card-body">
//                 <h2 className="card-title">{productItem?.name}</h2>
//                 <h2 className="card-title">{productItem?.brandName}</h2>
//                 <h2 className="card-title">{productItem?.type}</h2>
//                 <div className="flex">
//                   <p>{productItem?.price}</p>
//                   <p>{productItem?.rating}</p>
//                 </div>
//                 <div className="card-actions justify-end">
//                     <button className="btn btn-primary">View</button>
//                     <button onClick={() => handleDelete(productItem._id)} className="btn btn-primary">Delete</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>) : (
//         <p>No product</p>
//       )
//       }
//         </div>
//     );
// };

// export default MyCart;



const MyCart = () => {

  const fullProduct = useLoaderData()
  // console.log(fullProduct);

  const {user} = useContext(AuthContex)
      const email = (user?.email);
      // console.log(email);

const newProuct = fullProduct.filter(setProduct => setProduct.email === email)
console.log(newProuct);

  return (
    <div>
      
      
      <h3>{newProuct[0]?.product.name}</h3>
      <img src={newProuct[0]?.product.photo} alt="" /> 
    
    </div>
  );
};

export default MyCart;

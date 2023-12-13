import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContex } from "../../firebase/AuthProvider";
import Swal from "sweetalert2";

const MyCart = () => {

  const fullProduct = useLoaderData()

  const { user } = useContext(AuthContex)
  const email = (user?.email);

  const newProuct = fullProduct.filter(setProduct => setProduct.email === email)
  // console.log('from new product', newProuct);

  //   delete 
  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5001/addToCart/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(res => {
            if (res.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Item has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Type</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {newProuct.map((products, index) => <tr key={products._id}>
              <th>{index + 1}</th>
              <td>{products?.product.name}</td>
              <td>{products?.product.type}</td>
              <td>{products?.product.price}</td>
              <td>
                <Link to={`/checkout/${products._id}`}>
                  <button className="btn btn-primary">CheckOut</button>
                </Link>
              </td>
              <td><button onClick={() => handleDelete(products._id)} className="btn btn-primary">Delete</button></td>
            </tr>)}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;




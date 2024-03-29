
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContex } from "../../firebase/AuthProvider";
import Swal from "sweetalert2";

const WishCart = () => {

    const fullProduct = useLoaderData()

    const { user } = useContext(AuthContex)
    const email = (user?.email);

    // 
    const addToCartButton = (products) => {
        const name = products.product.name;
        const type = products?.product.type;
        const price = products?.product.price;

        const product = { name, type, price }

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
                fetch(`https://assignment-10-6cw90l870-mdmohiuddin10.vercel.app/wishCart/${_id}`, {
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


    const newProuct = fullProduct.filter(setProduct => setProduct.email === email)
    // console.log('from new product', newProuct);
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
                                <button onClick={() => addToCartButton(products)} className="btn bg-purple-500 btn-primary">Add to Cart</button>
                            </td>
                            <td><button onClick={() => handleDelete(products._id)} className="btn btn-primary">Delete</button></td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WishCart;
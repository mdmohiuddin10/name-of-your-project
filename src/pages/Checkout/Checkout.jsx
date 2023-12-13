import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {

    const { id } = useParams()
    const datam = useLoaderData()
    const newData = datam.filter(data=> data._id === id)
    console.log(newData);

    const handleAddProduct = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const brandName = form.brandName.value
        const type = form.type.value
        const price = form.price.value
        const description = form.description.value
        const photo = form.photo.value
        const rating = form.rating.value
        const newProduct = { name, brandName, type, price, description, photo, rating }
        console.log(newProduct);

        // send data to the server
        fetch('https://assignment-10-6cw90l870-mdmohiuddin10.vercel.app/paymant', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Added Product Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="bg-[#F4F3F0] md:p-20 p-10">
            <h2 className="text-3xl font-semibold text-center">CheckOut</h2>
            <form onSubmit={handleAddProduct}>
                <div className="md:flex gap-5 mb-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input readOnly type="text" defaultValue={newData[0]?.product.name} name="brandName" placeholder="Brand Name" className="input input-bordered md:w-full w-[300px]" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" readOnly defaultValue={newData[0]?.product.type} name="name" placeholder="Product Name" className="input input-bordered md:w-full w-[300px]" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-5 mb-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input readOnly type="text" defaultValue={newData[0]?.product.price}  name="type" placeholder="type" className="input input-bordered w-[300px] md:w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-[300px] md:w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-5 mb-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-[300px] md:w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo" className="input input-bordered w-[300px] md:w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-5 mb-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <input type="submit" value="Add product" className="btn btn-block bg-[#D2B48C] mt-5" />
            </form>
        </div>
    );
};

export default Checkout;
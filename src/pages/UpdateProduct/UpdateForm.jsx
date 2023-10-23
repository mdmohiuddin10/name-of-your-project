import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateForm = () => {

    const updateProduct = useLoaderData()
    const {_id, name, brandName, type, price, photo, rating} = updateProduct
    // const {_id} = useParams()
    console.log(_id, name, brandName, type, price, photo, rating);
    const handleUpdateProduct = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const brandName = form.brandName.value
        const type = form.type.value
        const price = form.price.value
        const photo = form.photo.value
        const rating = form.rating.value
        const upadatedItem = { name, brandName, type, price, photo, rating }
        console.log(upadatedItem);

        // send data to the server
        fetch(`http://localhost:5001/addProduct/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(upadatedItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="bg-[#F4F3F0] p-20">
            <h2 className="text-3xl font-semibold text-center">Update Product: {name}</h2>
            <form onSubmit={handleUpdateProduct}>
                <div className="md:flex gap-5 mb-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <span>Brand Name</span>
                            <input type="text" name="brandName" placeholder="Brand Name" defaultValue={brandName} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" defaultValue={name} name="name" placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-5 mb-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <span>Type</span>
                            <input type="text" defaultValue={type} name="type" placeholder="type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <span>Price</span>
                            <input type="text" defaultValue={price} name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-5 mb-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <span>Rating</span>
                            <input type="text" defaultValue={rating} name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <span>Photo</span>
                            <input type="text" defaultValue={photo} name="photo" placeholder="Photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Submit" className="btn btn-block bg-[#D2B48C]" />
            </form>
        </div>
    );
};

export default UpdateForm;
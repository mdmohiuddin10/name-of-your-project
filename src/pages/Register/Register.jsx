
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContex } from "../../firebase/AuthProvider";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";





const Register = () => {

    const { createUser, googleLogin } = useContext(AuthContex)



    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);



        if (password.length < 6) {
            alert("password must be 6 charecters")
            return
        }
        else if (!/[A-Z!@#$%^&*()_+{}|:"<>?~`\-=[\]\\;',./]/.test(password)) {
            alert('Your password should have at least one uppercase charecter');
            return
        }


        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire("Good job!", "User Created Successfully!", "success");


                // update Profile
                updateProfile(result.user, { displayName: name }, { photoURL: photo })
                    .then(() => {
                        console.log('Profile Updated');
                    })
                    .catch()

            })
            .catch(error => {
                console.log(error.message);
                alert("Error!", "something went wrong!", "error");
            })
    }

    const handleGoogle = () => {
        googleLogin()
            .then((result) => {
                console.log(result.user)
                Swal.fire("Good job!", "User Created Successfully!", "success");
            })
            .catch((error) => {
                alert(error.message);
            })
    }


    return (
        <div>
            <div>
                <h2 className="text-2xl text-center mt-10"> Please Register</h2>
                <form onSubmit={handleRegister} className="md:w-3/5 mt-10 px-5 py-5 rounded-md mx-auto bg-base-200">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email address</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>

                <p className="text-center mt-3">Allready Have An Account ? <Link className="font-semibold text-blue-700" to={'/login'}>Login</Link></p>
                <h2 className="text-center font-semibold text-2xl mt-5 mb-5">Continue With Google</h2>
                <div className="border w-[50px] mx-auto mb-10">
                    <button onClick={handleGoogle}><FaGoogle className="text-5xl px-3 py-3 w-full justify-center"></FaGoogle></button>
                </div>

            </div>
        </div>
    );
};

export default Register;
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContex } from "../../firebase/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";




const Login = () => {

    const { signIn, googleLogin } = useContext(AuthContex)

    const location = useLocation();
    const navigate = useNavigate()
    console.log(location);

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);



        // sign in
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                // setSuccess('user logged succsee')
                Swal.fire("Good job!", "User Logged Successfully!", "success");

                // navigate after login
                navigate(location?.state ? location.state : '/');


            })
            .catch(error => {
                console.log(error);
                alert(error.message)

            })


    }


    const handleGoogle = () => {
        googleLogin()
            .then((result) => {
                console.log(result.user)
                Swal.fire("Good job!", "User logged Successfully!", "success");
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                alert(error.message);
            })
    }


    return (
        <div>



            <h2 className="text-2xl text-center mt-10"> Please login</h2>


            <form onSubmit={handleLogin} className="md:w-3/5 mt-10 px-5 py-5 rounded-md mx-auto bg-base-200">
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
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="text-center mt-3">Dont’t Have An Account ? <Link className="font-semibold text-blue-700" to={'/register'}>Register</Link></p>
            <h2 className="text-center font-semibold text-2xl mt-5 mb-5">Continue With Google</h2>
            <div className="border w-[50px] mx-auto mb-10">
                <button onClick={handleGoogle}><FaGoogle className="text-5xl px-3 py-3 w-full justify-center"></FaGoogle></button>
            </div>

        </div>
    );
};

export default Login;
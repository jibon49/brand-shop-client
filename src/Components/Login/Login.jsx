import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../AuthProviders/AuthProviders';

const Login = () => {


    const { logIn } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        logIn(email,password)
        .then(result=>{
            console.log("sign in successful")
        })
        .catch(error=>{
            console.log(error.message)
        })
    }


    return (
        <div>
            <div className="className=mt-20 max-w-6xl mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse mb-20">
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body text-[#403F3F]">
                            <div className="form-control">
                                <h1 className="text-center text-4xl font-semibold">Login your account</h1>
                                <hr className="my-12" />
                                <label className="label">
                                    <span className="text-xl font-semibold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your email" className="input input-bordered bg-[#F3F3F3]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xl font-semibold">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered bg-[#F3F3F3]" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#eb1c3a] text-white">Login</button>
                            </div>

                            <p className="font-semibold text-center mt-7">Don’t Have An Account ? <span className="text-[#eb1c3a]"><NavLink to='/register'>Register</NavLink></span></p>
                        </form>
                        {/* <div className="p-10 w-2/3 mx-auto mt-6">
                            <button onClick={handleGoogleSignIn} className=" btn btn-outline w-full mb-2">
                                <FaGoogle className=' text-blue-500 text-lg'></FaGoogle>Login with
                                Google
                            </button>
                        </div> */}
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Login;
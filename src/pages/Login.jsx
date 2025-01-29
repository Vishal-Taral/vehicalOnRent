import React, { useState } from 'react';
import logo2 from '../assets/car-spare-image.jpg';
import { useNavigate, NavLink } from 'react-router-dom';
import { registerUser } from '../../apiCalls';
import { loginUser } from '../../apiCalls';
import Loading from '../components/Loading';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const userData = { email, password };
            const response = await loginUser(userData);
            localStorage.setItem("token", JSON.stringify(response.token));
            window.dispatchEvent(new Event("storage"));
            console.log(response);
            setErrorMessage("");
            setSuccess("Login successfully")
            setTimeout(() => {
                setLoading(false);
                navigate('/')
            },2000)
        } catch (error) {
            console.error("Login failed:", error.message);
            setErrorMessage(error.message || "Login failed. Please try again.");
            setLoading(false);
        }
    };
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            {loading && <Loading actionTitle={'Signing In ...'}/>} 
            <div className="flex flex-col justify-center px-6 py-12 lg:px-8 bg-white w-96 rounded-xl shadow-md">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-20 w-20" src={logo2} alt="Company logo" />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                    {errorMessage && <p className="text-red-500 text-sm mt-2 text-center">{errorMessage}</p>}
                    {success && <p className="text-red-500 text-sm mt-2 text-center">{success}</p>}
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        <span>Not a member?</span>

                        <NavLink to={'/Register'} className="font-semibold text-indigo-600 hover:text-indigo-500">SignUp</NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;

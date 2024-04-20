"use client"
import Link from "next/link";
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BASE_APT_URL } from "../config/api_config";

export default function Singup() {

    const router = useRouter();
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [loading, setloading] = useState(false);
    const [type, settype] = useState("password")
    
    const show_password = () =>{

        if(type == "password")
        {
            settype("test");
        }
        else
        {
            settype("password");
        }

    }

    const Singup_btn = async () => {

        if (!name && !email && !password ) {
            toast.error("Plz Feels Form!")
        }
        else if (!name && !email) {
            toast.error("Enter The Name And Email!")
        }
        else if (!name && !password) {
            toast.error("Enter The Name And Password!")
        }
        else if (!email && !password) {
            toast.error("Enter The Email And Password!");
        }
        else if (!name) {
            toast.error("Enter the Name!");
        }
        else if (!email) {
            toast.error("Enter the email");
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error("Enter Valid Email");
        }
        else if (!password) {
            toast.error("Enter the password!");
        }
        else {
            setloading(true);
            const userData = { name, password, email };

            try {
                const response = await fetch("https://express-js-backend.onrender.com/api/auth/singup", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                });

                if (response.ok) {
                    toast.success("Succefully Login");
                    router.push('/login');
                } 
                else {
                    setloading(false);
                    toast.error("User Alredy Extis");
                }
            } catch (error) {
                console.error('An error occurred:', error);
            }

        }
    }
    return (
        <main>
            <section className="bg-gray-50 dark:bg-gray-900 h-screen">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="https://toforzero.com/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        < img className="w-12 h-12 mr-2" src="/logo_toForZero.png" alt="logo" />
                        TO FOR ZERO
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create Account
                            </h1>
                            <div className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                        value={name}
                                        onChange={(e) => setname(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                    <input
                                        type="email"
                                        placeholder="name@company.com"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                        value={email}
                                        onChange={(e) => setemail(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input
                                        type={type}
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                        value={password}
                                        onChange={(e) => setpassword(e.target.value)} />
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input 
                                        id="terms" 
                                        aria-describedby="terms" 
                                        type="checkbox" 
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" 
                                        required=""
                                        onClick={show_password}
                                         />
                                    </div>
                                    <div className="ml-2 text-sm">
                                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">Show Password</label>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-700 hover:bg-blue-700  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                                    onClick={Singup_btn}
                                >
                                    {loading ? "" : ' Create an account'}
                                    {loading && <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>}
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account?
                                    <Link 
                                    href='/login'
                                    className="font-medium text-blue-600 hover:underline dark:text-login-500 px-1">
                                    Login here</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </section>
        </main>
    )
}
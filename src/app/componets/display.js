"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BASE_APT_URL } from "../config/api_config";


export function Display_data() {

    const router = useRouter();
    const [user, setUser] = useState();
    const token = typeof window !== 'undefined' ? localStorage.getItem("USE") : null; 

    const logout = async () => {
        localStorage.removeItem('USE');
        router.push('/login');
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://express-js-backend.onrender.com/users/getdata", {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                });
                const result = await response.json();
                setUser(result);
            } catch (error) {
                console.error(error.message);
            }
        };

        if (token) {
            fetchData();
        } 
        else {
            router.push('/login');
        }
    }, [router, token]);

    return (
        <section className=" dark:bg-gray-900 flex font-medium items-center justify-center h-screen">
            <section className="w-64 mx-auto dark:bg-gray-800 rounded-2xl px-8 py-6 shadow-lg">
                <div className="mt-6 w-fit mx-auto">
                    <img src="/logo_toForZero.png" className="rounded-full w-28 " alt="profile picture" />
                </div>
                <p className="text-emerald-400 font-semibold mt-2 text-center" >
                    Active
                </p>
                <div className="mt-3 text-center ">
                    <h3 className="text-white font-bold text-xl tracking-wide" style={{textTransform:'capitalize'}}>
                    {user && user.name}
                    </h3>
                </div>
                <div className="my-3 text-center rounded-2xl">
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-200"
                        id="logoutBtn"
                        onClick={logout}
                    >
                        Logout
                    </button>
                </div>
            </section>
        </section>
    )
}
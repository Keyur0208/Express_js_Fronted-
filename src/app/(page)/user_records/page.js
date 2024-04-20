import { BASE_APT_URL } from "@/app/config/api_config";


export const metadata = {
    title: 'TO FOR ZERO || Records'
}

async function getusersdetails() {
    let userdata = await fetch(`${BASE_APT_URL}/admin/record`, { cache: 'no-store' });
    userdata = await userdata.json();
    return userdata.message;
}


export default async function page() {

    const users = await getusersdetails();
    console.log(users);


    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900 h-screen">
                <div  style={{display:'flex',justifyContent:'center',alignItems:'center',}} className="py-5" >
                    <a href="https://toforzero.com/" className="flex items-center mb-6 text-3xl font-semibold text-gray-900 dark:text-white">
                        < img className="w-12 h-12 mr-2" src="/logo_toForZero.png" alt="logo" />
                        TO FOR ZERO
                    </a>
                </div>
                <div className="flex min-h-screen  justify-center">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white shadow-md rounded-xl">
                            <thead>
                                <tr className="bg-blue-gray-100 text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                                    <th className="py-3 px-4 text-left">Name</th>
                                    <th className="py-3 px-4 text-left">Email</th>
                                </tr>
                            </thead>
                            <tbody className="text-blue-gray-900">

                                {
                                    users.map((item) => {
                                        return (
                                            <tr className="border-blue-gray-200">
                                                <td className="py-3 px-4">{item.name}</td>
                                                <td className="py-3 px-4">{item.email}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <div className="w-full pt-5 px-4 mb-8 mx-auto ">
                            <div className="text-sm  text-white py-1 text-center">
                                Made by <a href="#" className="text-white font-semibold" > Keyur Pansuriya</a>.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
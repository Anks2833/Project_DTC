import { FaUserCircle } from "react-icons/fa";
import { FaUserAlt, FaUserClock, FaRoute } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { GiBusStop } from "react-icons/gi";

import { NavLink, Outlet } from "react-router-dom";


const AdminDash = () => {


    const dashLinks = [
        { id: 1, link: "/admindashboard/all_users", icon: <FaUserAlt />, name: "All Users" },
        { id: 2, link: "/admindashboard/new_driver", icon: <FaUserClock />, name: "New Driver" },
        { id: 3, link: "/admindashboard/all_drivers", icon: <FaUserClock />, name: "All Drivers" },
        { id: 4, link: "/admindashboard/new_stop", icon: <GiBusStop />, name: "New Stop" },
        { id: 5, link: "/admindashboard/all_stops", icon: <GiBusStop />, name: "All Stops" },
        { id: 6, link: "/admindashboard/new_route", icon: <FaRoute />, name: "New Route" },
        { id: 7, link: "/admindashboard/all_routes", icon: <FaRoute />, name: "All Routes" },
    ]

    return (
        <div className="w-full h-screen bg-slate-950 flex">

            <div className="w-[15vw] flex flex-col items-center pt-6">

                <div className="w-full flex justify-start px-6 items-center">
                    <img className="w-20" src="../../logo-white.png" alt="dtc-logo" />
                </div>

                <div className="h-72 flex flex-col gap-3 pt-10">

                    {dashLinks.map((link) => {
                        return (
                            <NavLink
                                key={link.id}
                                to={link.link}
                                className={({ isActive }) =>
                                    `flex items-center justify-start gap-2 px-6 py-2 rounded-xl transition-colors ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-600 hover:text-white'
                                    }`
                                }
                            >
                                <div className="flex items-center gap-2">
                                    <div className="text-lg">{link.icon}</div>
                                    <h1 className="text-md font-semibold">{link.name}</h1>
                                </div>
                            </NavLink>
                        )
                    })}

                    <NavLink className="flex items-center justify-start gap-2 hover:bg-red-600 pl-6 pr-8 transition-colors py-2 rounded-xl mt-12">
                        <div className="text-lg"><IoIosLogOut /></div>
                        <h1 className="text-md font-semibold">Logout</h1>
                    </NavLink>

                </div>

            </div>

            <div className="w-5/6 ml-10 pr-12">

                <div className="flex justify-between px-10 items-center text-3xl pt-5 pb-6">
                    <h1 className="text-2xl font-semibold">Dashboard</h1>

                    <div className="flex items-center gap-2">
                        <div><FaUserCircle /></div>
                        <div><h1 className="text-lg tracking-tighter">Ankur Dubey</h1></div>
                    </div>
                </div>

                <div className="w-full h-[42vw] bg-[#00091d] rounded-xl shadow shadow-white">

                    <div className="w-full h-full flex justify-center items-center">
                        {/* <div className="flex flex-col gap-2 items-center">
                            <h1 className="text-6xl font-semibold text-slate-100">WELCOME, <span className="text-emerald-400">ANKUR DUBEY</span></h1>
                            <p className="text-2xl font-light tracking-tight text-slate-100">As an admin you can do wonders!</p>
                        </div> */}

                        <Outlet />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default AdminDash
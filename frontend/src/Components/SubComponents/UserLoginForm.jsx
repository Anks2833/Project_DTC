import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NotFound from "../AdminComponents/NotFound"; // Ensure this path is correct

const UserLoginForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [showNotFound, setShowNotFound] = useState(false); // State to control the display of NotFound

    const togglePasswordVisibility = () => {
        setPasswordVisible(prevState => !prevState);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        setShowNotFound(true); // Set to show the NotFound component
    };

    if (showNotFound) {
        return <NotFound />; // Render NotFound component when showNotFound is true
    }

    return (
        <div className="w-full h-screen bg-zinc-300 flex">
            <div className="w-1/2 h-screen flex flex-col justify-center bg-[#00091d]">
                {/* Heading */}
                <div className="w-full flex flex-col items-center justify-center text-white">
                    <h1 className="nav-heading text-zinc-100 text-[3vw] font-semibold">Delhi Transport Corporation</h1>
                    <h1 className="nav-heading text-green-500 text-[2vw]">User Login</h1>
                </div>
                {/* Login form */}
                <div className="w-full mt-10 flex flex-col">
                    <form className="w-full flex flex-col items-center gap-2" onSubmit={handleSubmit}>
                        <input className="w-[23vw] rounded-lg bg-slate-800 outline-none text-white" required type="text" placeholder="Enter username" />
                        <input
                            className="relative w-[23vw] rounded-lg bg-slate-800 outline-none text-white"
                            required
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Enter password"
                        />
                        <div className="absolute inset-y-[26.2vw] inset-x-[34vw] cursor-pointer text-white" onClick={togglePasswordVisibility}>
                            {passwordVisible ? <IoEyeSharp className="text-xl text-white" /> : <IoEyeOffSharp className="text-xl text-white" />}
                        </div>
                        <input className="w-[23vw] bg-purple-600 font-semibold rounded-lg text-white text-lg px-8 py-2 mt-2 cursor-pointer" type="submit" value="Log In" />
                    </form>
                    <div className="w-full flex justify-center pt-5">
                        <div className="px-24 py-2 rounded-lg border border-slate-500 cursor-pointer">
                            <NavLink to="/register">Create An Account</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/2 h-screen bg-[url('../../bus.jpg')] bg-cover bg-center bg-no-repeat"></div>
        </div>
    );
}

export default UserLoginForm;
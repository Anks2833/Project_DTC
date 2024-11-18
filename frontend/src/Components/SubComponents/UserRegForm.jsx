import { useState } from "react";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import NotFound from "../AdminComponents/NotFound";

const UserRegForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [showNotFound, setShowNotFound] = useState(false); // State to control the display of NotFound

  const togglePasswordVisibility = () => {
    setPasswordVisible(prevState => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(prevState => !prevState);
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
          <h1 className="nav-heading text-green-500 text-[2vw]">User Registration</h1>
        </div>

        {/* Login form */}
        <div className="w-full mt-10 flex flex-col">
          <form className="w-full flex flex-col items-center gap-2">
            <div className="flex gap-2">
              <input className="w-[11.2vw] rounded-lg bg-slate-800 outline-none text-white" required type="text" placeholder="First Name" />
              <input className="w-[11.2vw] rounded-lg bg-slate-800 outline-none text-white" required type="text" placeholder="Last Name" />
            </div>
            <input className="w-[23vw] rounded-lg bg-slate-800 outline-none text-white" required type="email" placeholder="Enter email" />
            <input
              className="relative w-[23vw] rounded-lg bg-slate-800 outline-none text-white"
              required
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter password"
            />
            <div className="absolute inset-y-[26.3vw] inset-x-[34vw] cursor-pointer text-white" onClick={togglePasswordVisibility}>
              {passwordVisible ? <IoEyeSharp className="text-xl text-white" /> : <IoEyeOffSharp className="text-xl text-white" />}
            </div>
            <input
              className="relative w-[23vw] rounded-lg bg-slate-800 outline-none text-white"
              required
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Confirm password"
            />
            <div className="absolute inset-y-[29.5vw] inset-x-[34vw] cursor-pointer text-white" onClick={toggleConfirmPasswordVisibility}>
              {confirmPasswordVisible ? <IoEyeSharp className="text-xl text-white" /> : <IoEyeOffSharp className="text-xl text-white" />}
            </div>
            <input onClick={handleSubmit} className="w-[23vw] bg-purple-600 font-semibold rounded-lg text-white text-lg px-8 py-2 mt-2 cursor-pointer" type="submit" value="Create Account" />
          </form>

          <div className="w-full flex justify-center pt-5">
            <div className="px-24 py-2 rounded-lg border border-slate-500 cursor-pointer">
              <NavLink to="/user_login">Already have an account? </NavLink>
            </div>
          </div>
        </div>

      </div>

      <div className="w-1/2 h-screen bg-[url('../../bus.jpg')] bg-cover bg-center bg-no-repeat"></div>


    </div>
  )
}

export default UserRegForm
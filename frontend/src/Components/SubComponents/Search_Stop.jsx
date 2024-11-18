import { IoSearchOutline } from "react-icons/io5";
import { useState } from 'react';
import NotFound from "../AdminComponents/NotFound"; // Ensure this path is correct

const Search_Stop = () => {
    const [showNotFound, setShowNotFound] = useState(false); // State to control the display of NotFound

    const handleSubmit = () => {
        setShowNotFound(true); // Set to show the NotFound component
    };

    if (showNotFound) {
        return <NotFound />; // Render NotFound component when showNotFound is true
    }

    return (
        <div className="w-[50vw] h-32 bg-slate-800 rounded-xl shadow-md px-5 py-3 border border-zinc-100">
            <div className="flex items-center text-2xl mb-4 gap-2 text-white">
                <div><IoSearchOutline /></div>
                <h1>Know Your Stop</h1>
            </div>
            <form className="flex gap-2">
                <input className="w-96 text-black bg-zinc-100 rounded" type="text" placeholder="Enter Name Of The Stop" />
                <input onClick={handleSubmit} className="bg-green-500 px-5 py-2 rounded-md" type="button" value="Search" />
            </form>
        </div>
    );
}

export default Search_Stop;
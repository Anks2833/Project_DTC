import { NavLink } from "react-router-dom";

import Data from "./SubComponents/Data"
import Search_Stop from "./SubComponents/Search_Stop"
import Map from "./SubComponents/Map"

import { FaExternalLinkAlt } from "react-icons/fa";


const Page2 = () => {
    return (
        <div className="w-full min-h-screen bg-[#00091d] flex flex-col border-b-[1px] border-b-slate-900 pb-20">

            <div className="w-full flex justify-center pt-20">
                <Data />
            </div>

            <div className="w-full px-20">
                <div className="flex justify-center items-center mt-20">
                    <Search_Stop />
                </div>

                <div className="w-full h-full">
                    <div><Map /></div>

                    <NavLink to="/map">
                        <div className="absolute left-20 bg-white px-6 py-2 text-black rounded-full flex justify-between items-center gap-2 cursor-pointer hover:text-white hover:bg-transparent hover:border border hover:border-white hover:transition-all shadow shadow-black">
                            <h1>View Full Map</h1>
                            <div><FaExternalLinkAlt /></div>
                        </div>
                    </NavLink>
                </div>
            </div>

        </div>
    )
}

export default Page2
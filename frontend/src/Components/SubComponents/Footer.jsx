//React imports
import { useState, useEffect } from "react";

//React icons
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (

        <footer className="w-full min-h-32 bg-[#00091d] pt-20 pb-5 px-20">

            <div className="w-full min-h-32 py-20 border-b-[1px] border-t-[1px] border-t-slate-800 border-b-slate-800 flex justify-start pl-20">

                <div className="flex flex-col">
                    <div><img className="w-20" src="logo-white.png" alt="dtclogo" /></div>
                    <div className="flex flex-col gap-2">
                        <div><h1 className="text-xl">Connect with our socials</h1></div>

                        <div className="flex gap-4 text-2xl">
                            <div><FaInstagram /></div>
                            <div><FaYoutube /></div>
                            <div><FaXTwitter /></div>
                        </div>
                    </div>
                </div>

                {/* First links */}
                {/* <div className="flex flex-col gap-3">
                    <div><h1 className="text-2xl tracking-wide font-semibold">HEADING1</h1></div>

                    <div className="text-zinc-400">
                        <h1>one</h1>
                        <h1>two</h1>
                        <h1>three</h1>
                    </div>
                </div> */}

                {/* Second links */}
                {/* <div className="flex flex-col gap-3">
                    <div><h1 className="text-2xl tracking-wide font-semibold">HEADING2</h1></div>

                    <div className="text-zinc-400">
                        <h1>one</h1>
                        <h1>two</h1>
                        <h1>three</h1>
                    </div>
                </div> */}

                {/* Third links */}
                {/* <div className="flex flex-col gap-3">
                    <div><h1 className="text-2xl tracking-wide font-semibold">HEADING3</h1></div>

                    <div className="text-zinc-400">
                        <h1>one</h1>
                        <h1>two</h1>
                        <h1>three</h1>
                    </div>
                </div> */}

            </div>

            <div className="flex flex-col items-center justify-center pt-5 font-semibold">
                <h1>© {currentYear} DTC</h1>
                <h1>All Rights Reserved</h1>
            </div>

        </footer>

    )
}

export default Footer
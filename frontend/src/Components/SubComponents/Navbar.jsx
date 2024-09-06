//Imports
import { useEffect, useState } from "react"


const Navbar = () => {

    // State variables to manage scroll behavior
    const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
    const [top, setTop] = useState(0);
    useEffect(() => {
        // Function to handle scroll events
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                setTop(0); // Show navbar
            } else {
                setTop(-100); // Hide navbar
            }
            setPrevScrollpos(currentScrollPos);
        };
        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);
        // Clean up by removing the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollpos]);

    const navbarStyle = {
        top: `${top}px`,
        width: '100%',
        transition: 'top 0.3s',
    };

    // Array of navTexts
    const navText = ["Home", "Timetable", "Contact Us"];

    return (
        <div className="fixed top:[{top}px] z-10 w-full h-[6vw] flex justify-between items-center px-20" style={navbarStyle}>

            <div className="logo flex items-center">

                <div className="main-logo w-24 h-24 flex">
                    <img src="logo-white.png" alt="" />
                </div>

            </div>


            {/* The navTexts */}
            <div className="logo-text flex items-center gap-6">

                {navText.map((val, index) => {
                    return (
                        <a key={index} href="" className="">{val}</a>
                    )
                })}

                <button className="font-semibold bg-[#2F4C99] px-5 py-2 rounded-md ml-6">Sign In</button>

            </div>

        </div>
    )
}
export default Navbar
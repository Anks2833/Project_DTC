// Components
import Journey_Form from "./SubComponents/Journey_Form"

// Icon components
import { MdOutlineArrowDropDown } from "react-icons/md";


const Page1 = () => {
    return (

        <div className="relative w-full h-screen">

            {/* The video */}
            <div className="w-full h-screen">
                <video className="w-full h-full object-cover brightness-[0.2]" autoPlay muted loop src="../dtcvideo.mp4"></video>
            </div>

            {/* The Journey form */}
            <div className="w-full absolute flex items-start gap-10 top-1/2 left-0 -translate-y-52 px-20">
                <div className="">
                    <Journey_Form />
                </div>

                <div className="w-1/2 flex flex-col gap-5">
                    <h1 className="text-3xl font-bold">Welcome To Delhi Trasport Corporation (DTC)</h1>
                    <p className="w-[40vw] font-light">The Delhi Transport Corporation (DTC) is the primary public bus service provider in Delhi, India, and one of the largest bus networks in the country. Established in 1948, DTC plays a vital role in ensuring mobility for millions of residents and visitors in the bustling metropolitan area. Operating a fleet of buses, including eco-friendly CNG buses, DTC offers extensive coverage across Delhi and the surrounding regions. Its services are crucial for daily commuters, providing an affordable and reliable means of transportation. DTC is committed to enhancing public transit through continuous improvements in service quality, safety, and sustainability.</p>
                </div>
            </div>

            <div className="absolute bottom-4 left-4 text-3xl bg-white rounded-full cursor-pointer text-black">
                <MdOutlineArrowDropDown />
            </div>

        </div>
    )
}

export default Page1
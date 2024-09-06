//Icon Components
import { TbArrowsDownUp } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";

const Journey_Form = () => {
    return (

        <div className='relative w-[20vw] h-[30vw] bg-[#2F4C99] rounded-lg flex flex-col items-center py-6'>

            <div className="mb-5">
                <h1 className="text-3xl font-semibold tracking-tight">Where to?</h1>
            </div>

            <form action="">
                <div className="relative mb-6">
                    <input type="text" id="input-group-1" className="bg-zinc-100 focus:ring-green-300 focus:border-green-300 border border-gray-300 text-zinc-950 text-sm rounded block w-60 py-4" placeholder="From?" />
                </div>

                <div className="relative mb-6">
                    <input type="text" id="input-group-1" className="bg-zinc-100 focus:ring-green-300 focus:border-green-300 border border-gray-300 text-zinc-950 text-sm rounded block w-60 py-4" placeholder="To?" />
                </div>

                <div className="w-full border-b-[1px] border-b-zinc-400 pb-4">
                    <div className="relative w-full flex justify-center items-center px-8 bg-zinc-100 py-3 rounded-lg text-[#2F4C99] font-semibold text-xl">
                        <div className="absolute left-3 border border-zinc-400 p-2 rounded-full">
                            <FaArrowRight />
                        </div>
                        <input type="submit" value="Let's Go" />
                    </div>
                </div>
            </form>

            <div className="absolute top-32 right-10 shadow shadow-black bg-zinc-100 p-2 rounded-full text-black text-2xl">
                <TbArrowsDownUp />
            </div>

            <div className="w-full flex flex-col justify-center items-center leading-none tracking-tight">
                <img className="w-20 h-20" src="logo-white.png" alt="" />
                <h1>Delhi Transport Corporation</h1>
            </div>

        </div>
    )
}

export default Journey_Form
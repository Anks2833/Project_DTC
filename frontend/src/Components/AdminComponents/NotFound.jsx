import { MdCancel } from "react-icons/md";

const NotFound = () => {
    return (

        <div className='absolute bottom-10 z-50 left-1/2 -translate-x-1/2  px-4 py-2 rounded-xl flex justify-center items-center gap-3 bg-black'>
      
        <MdCancel className='text-red-600 text-2xl' />
        <h1>Failed to fetch data from server</h1>
  
      </div>
    )
}

export default NotFound
import React from 'react'
import { MdCancel } from "react-icons/md";

const New_Route = () => {

  return (
    <div className='flex justify-center items-center gap-3'>
      
      <MdCancel className='text-red-600 text-2xl' />
      <h1>Failed to fetch data from server</h1>

    </div>
  )
}
export default New_Route
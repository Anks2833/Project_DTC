import { useForm } from 'react-hook-form';

const New_Stop = () => {

  const { register, watch } = useForm();

  return (

    <div className="w-full h-full pt-10 flex gap-3 justify-center">

      <div className='relative flex flex-col items-center gap-2'>
        <input
          {...register("image")}
          className="w-[20vw] rounded-lg bg-zinc-800 text-white"
          type="text"
          placeholder='Enter the location name'
        />
      </div>

      <div className='relative flex flex-col items-center gap-2'>
        <input
          {...register("image")}
          className="w-[20vw] rounded-lg bg-zinc-800 text-white"
          type="text"
          placeholder='Enter the location coordinates'
        />
      </div>

    </div>
  )
}

export default New_Stop
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';


const New_Driver = () => {

  const [imagePreview, setImagePreview] = useState("");
  const [imagePreview1, setImagePreview1] = useState("");

  const { register, watch } = useForm();

  // Watch the file input for changes
  const image = watch('image');
  const image1 = watch('image1');

  // Update preview when file changes using useEffect
  useEffect(() => {
    if (image && image[0]) {
      const file = image[0];
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);

      return () => {
        URL.revokeObjectURL(previewUrl);
      };
    }
  }, [image]);

  useEffect(() => {
    if (image1 && image1[0]) {
      const file = image1[0];
      const previewUrl = URL.createObjectURL(file);
      setImagePreview1(previewUrl);

      return () => {
        URL.revokeObjectURL(previewUrl);
      };
    }
  }, [image1]);


  return (

    <div className='w-full'>

      <form className='flex flex-col items-center justify-between gap-20 px-10' action="">

        {/* Name */}
        <div className="w-full h-full flex justify-center gap-6">
          <input className="w-[16vw] bg-slate-900 border border-zinc-100 rounded-md" type="text" placeholder="First Name" />
          <input className="w-[16vw] bg-slate-900 border border-zinc-100 rounded-md" type="text" placeholder="Last Name" />
          <input className="w-[32vw] bg-slate-900 border border-zinc-100 rounded-md" type="text" placeholder="Address" />
        </div>


        <div className="w-full   flex items-center justify-between gap-10 px-12">

          {/* Driver Image */}
          <div className='w-full flex flex-col items-center gap-2'>

            <div className="w-full h-[12vw] flex justify-center rounded-lg overflow-hidden">
              {imagePreview ? (
                <img className="w-[20vw] h-full border border-zinc-100 rounded-lg object-cover object-center" src={imagePreview} alt="Pokemon Preview" />
              ) : (
                <div className="w-[20vw] h-[12vw] border border-zinc-100 rounded-lg flex justify-center items-center">
                  <p className="text-white text-xl">No image selected</p>
                </div>
              )}
            </div>

            {/* Driver Image */}
            <div className='relative flex flex-col items-center gap-2'>

              <h1 className='absolute left-6 bg-violet-500 px-10 py-2 rounded-xl'>Upload Driver's Image</h1>
              <input
                {...register("image")}
                className="w-[20vw] opacity-0 rounded-lg bg-zinc-800 text-white cursor-pointer"
                type="file"
              />
            </div>
          </div>

          {/* Aadhar Image */}
          <div className='relative w-full flex flex-col items-center gap-2'>
            <div className="w-full h-[12vw] flex justify-center rounded-lg overflow-hidden">
              {imagePreview1 ? (
                <img className="w-[20vw] h-full border border-zinc-100 rounded-lg object-cover object-center" src={imagePreview1} alt="Pokemon Preview" />
              ) : (
                <div className="w-[20vw] h-[12vw] border border-zinc-100 rounded-lg flex justify-center items-center">
                  <p className="text-white text-xl">No image selected</p>
                </div>
              )}
            </div>



            <div className='flex items-center gap-2'>

              <h1 className='absolute left-32 bg-violet-500 px-10 py-2 rounded-xl'>Aadhar-Image</h1>
              <input
                {...register("image1")}
                className="w-[25vw] opacity-0 rounded-lg bg-zinc-800 text-white cursor-pointer"
                type="file"
              />
            </div>
          </div>

        </div>

      </form>

    </div>
  )
}

export default New_Driver
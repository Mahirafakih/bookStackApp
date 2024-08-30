import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'


function Course() {
  return (
    <>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-24 items-center justify-center text-center '>
            <h1 className='text-2xl md:text-4xl'>We're delighted to have you 
                <span className='text-pink-500'> Here! :)</span></h1>
        
      
        <p className='mt-8 text-center'>
        Fusce dapibus quam ac tortor hendrerit faucibus. Aliquam ut enim id lacus facilisis tempus. Suspendisse eget sem leo. Duis sollicitudin elit eget tincidunt tincidunt. Cras mattis nisi eget risus bibendum, eu tincidunt purus auctor. Mauris venenatis ipsum lacus, in blandit orci faucibus nec. Vestibulum gravida blandit tortor et mattis.
        </p>

      <button className=' mt-4 bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-600  duration-300 '>
        <div className='flex justify-center items-center '>
          <div className='mr-2'>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
           </svg>
          </div>
          <a href='/'>Back</a>
        </div>
      </button>
      </div>
      <div className=' mt-12 grid grid-cols-1 md:grid-cols-4'>
        {list.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
     </div>
  </>)
};

export default Course
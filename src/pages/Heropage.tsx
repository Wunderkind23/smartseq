import React from 'react'
import Navbar from '../components/Navbar'
import herologo from '../assets/herologo.png'

// type Props = {}

const Heropage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${herologo})`}}>
        <Navbar/>
        <div className='flex justify-center text-white border border-red-500'>
            <div className='w-[550px]'>
                <h1 className='text-center font-bold sm:text-[3rem] text-[2rem] mt-[8rem]'>Turning Creative Ideas
                    into Success</h1>
                <p className='text-center mt-4 text-sm'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    dolore magna aliqua quis nostrud exerc.</p>

                    <div className='flex justify-center mt-8'>
                        <button className='py-2 px-4 rounded-full bg-blue-500'>Discover Now</button>
                    </div>

            </div>
            
        </div>


    </div>
  )
}

export default Heropage
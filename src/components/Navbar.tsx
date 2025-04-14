import React from 'react';
import logo1 from '../assets/logo1.webp';
import { IoIosSearch } from "react-icons/io";
import { TbPhoneCall } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";

// type Props = {}

const Navbar = () => {
  return (
    <div className='w-full px-16 h-[100px] flex items-center justify-between text-white border border-red-500'>
        <nav className='flex items-center'>
        <div className='w-[120px] lg:w-[150px]'>
            <img src={logo1} />
        </div>
        <ul className='flex items-center  gap-6 ml-8 hidden lg:flex'>
            <li>Home</li>
            <li>Pages</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Contacts</li>
            <IoIosSearch size={30} style={{cursor:'pointer'}}/>
        </ul>
        </nav>

        <div className=''>
            <div className='flex items-center gap-8 hidden lg:flex'>
                <div className='flex items-center gap-4'>
                    <TbPhoneCall style={{backgroundColor:'darkblue', height:'40px', width:'40px', borderRadius:'50%',padding:'10px'}} />
                    <p>18004585697</p>
                </div>
                <button className='py-3 px-8 rounded-full bg-blue-500'>Let Talk</button>
            </div>
            
            <div className='flex items-center lg:hidden gap-4'>
                <IoIosSearch size={30} style={{cursor:'pointer'}}/>
                <RxHamburgerMenu size={30} />
            </div>
        </div>
    </div>
  )
}

export default Navbar
import React, { useState } from 'react';
import logo from '../../../assets/logo/CareerHub.png'
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/Ai';
import {FaTimes} from 'react-icons/fa';

const Header = () => {
    const [mobile,setmobile]=useState(false)
    return (
        <div className='bg-[#b92f2f] text-black py-2'>
            <div className='w-11/12 max-w-7xl m-auto flex justify-between items-center'>
            <div><img src={logo} alt="" /></div>
           <ul className='hidden lg:flex lg:space-x-3'>
              <li><NavLink className={({ isActive}) => isActive ? 'text-[#34a83c]':""}  to="/">Statistics</NavLink></li>
              <li><NavLink className={({ isActive}) => isActive ? 'text-[#34a83c]':""}  to="/applied">Applied Jobs</NavLink ></li>
              <li><NavLink to="/blog" className={({ isActive}) => isActive ? 'text-[#34a83c]':""}  >Blog</NavLink ></li>
           </ul>
           <button className='lg:block hidden bg-gradient-to-r from-[#38b3e4] to-[#075c7e] py-2 px-3 font-bold'>Star Applying</button>
           {/* menu ber */}
           <div onClick={()=>setmobile(!mobile)} className='lg:hidden cursor-pointer'>
            {mobile ? <FaTimes/> : <AiOutlineMenu /> }
           </div>
           {/* mobile and tablent phone */}
           <div className={`${mobile ? 'lg:hidden fixed duration-200 transition-all left-0 top-10 space-y-3 w-[300px] h-full bg-[#b02c2c]  p-3':'fixed left-[-100%] top-10 transition-all space-y-3 w-[300px] h-full bg-[#b02c2c]  p-3'}`}>
           <ul className='lg:flex lg:space-x-3'>
              <li><Link>Statistics</Link></li>
              <li><Link>Applied Jobs</Link></li>
              <li><Link>Blog</Link></li>
           </ul>
           <button className='bg-gradient-to-r from-[#38b3e4] to-[#075c7e] py-2 px-3 font-bold'>Star Applying</button>
           </div>
        </div>
        </div>
    );
};

export default Header;
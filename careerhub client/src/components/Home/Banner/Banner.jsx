import React from 'react';
import img from '../../../assets/images/user.png'

const Banner = () => {
    return (
        <div className='w-11/12 max-w-7xl m-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2  pt-2'>
                <div  className='self-center order-1 py-5 lg:py-0 lg:order-none'>
                    <h1 className='text-3xl font-extrabold'>One Step<br/>Closer To Your<br/><span className='text-[#3376be]'>Dream Job</span></h1>
                    <p className='my-2'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='bg-[#1c4e87] text-white py-2 px-6 rounded-md mt-2'>Get Started</button>
                </div>
               <img  className='w-[500px] m-auto' src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;
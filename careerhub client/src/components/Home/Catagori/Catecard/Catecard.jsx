import React from 'react';

const Catecard = ({cateobj}) => {
    const {logo,category_name,availability}=cateobj
    return (
        <div className='bg-[#e1dfffd7] p-3 rounded-md'>
           <img className='bg-[#cac8ecd7] p-1 rounded-md' src={logo} alt="" />
           <div className='py-2'>
            <h1 className='text-xl'>{category_name}</h1>
            <p className='text-sm'>{availability}</p>
           </div>
        </div>
    );
};

export default Catecard;
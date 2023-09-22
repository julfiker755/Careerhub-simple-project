import React from 'react';
import { BsFillGeoAltFill } from 'react-icons/bs';
import { TbCurrencyTaka } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const Jobscard = ({jobsdata}) => {
    const navigate=useNavigate()
    const {id,logo,job_title,company_name,job_type,remote_or_onsite}=jobsdata
    return (
        <div className='border rounded-md p-4'>
            <img src={logo} alt="" />
            <h1 className='font-semibold text-xl'>{job_title}</h1>
            <h1 className='text-base'>{company_name}</h1>
            <div className='flex gap-3'>
                <button className='bg-[#2f96d6] py-1 px-3 rounded-md'>{remote_or_onsite}</button>
                <button className='bg-[#3483b4] py-1 px-3 rounded-md'>{job_type}</button>
            </div>
            <div className='flex gap-3 py-2'>
                <h1 className='flex gap-1 items-center'><BsFillGeoAltFill/>Dhaka, Bangladesh</h1>
                <h1 className='flex gap-1 items-center'><TbCurrencyTaka/> Salary : 100K - 150K</h1>
            </div>
            <button onClick={()=>navigate(`/single/${id}`)} className='bg-[#209558] py-2 text-white rounded-md px-4'>View Details</button>
        </div>
    );
};

export default Jobscard;
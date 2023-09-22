import React, { useEffect, useState } from 'react';
import Jobscard from './Jobscard';

const Jobs = ({jobs}) => {
    const [see,setsee]=useState(false)
    const [btn,setbtn]=useState(true)
    
    return (
        <div className='my-10 w-11/12 max-w-7xl m-auto'>
        <div className='text-center mb-4'>
            <h1 className='text-3xl font-semibold'>Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
       <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          {jobs.slice(0,see ? jobs.length :4).map(d=> <Jobscard key={d.id} jobsdata={d}></Jobscard>)}
       </div>
       {btn && <div onClick={()=>setbtn(false)} className='flex justify-center my-10'>
          <button onClick={()=>setsee(!see)} className='bg-[#227e82] text-white font-bold py-2 px-4 rounded-md'>See All Jobs</button>
       </div>}
       
    </div>
    );
};

export default Jobs;
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { getStoredJobApplication } from '../../utily/Localstroage';
import AppCard from './AppCard';

const Appliedjobs = () => {
    const [appliedjobs,setappliedjobs]=useState([])
    const [appyjobs,setappyjobs]=useState([])
    const [color,setcolor]=useState('all')
    const [display,setdisplay]=useState([])
    useEffect(()=>{
        fetch("./jobs.json")
        .then(res=>res.json())
        .then(data=>setappliedjobs(data))
    },[])
    useEffect(()=>{
        const getStoredJobid=getStoredJobApplication()
        if(appliedjobs.length > 0){
            const jobappiled=appliedjobs.filter(job=>getStoredJobid.includes(job.id))
            setdisplay(jobappiled)
            setappyjobs(jobappiled)
        }
    },[appliedjobs])

    // Handlefilter
    const hanldefilter=handle=>{
      if(handle === 'all'){
        setcolor('all')
        setdisplay(appyjobs)
      }else if(handle === 'Remote'){
        setcolor('Remote')
        const appyjobs2=appyjobs.filter(remote=>remote.remote_or_onsite === "Remote")
        setdisplay(appyjobs2)
      }else if(handle === 'Onsite'){
        setcolor('Onsite')
        const appyjobs3=appyjobs.filter(Onsite=>Onsite.remote_or_onsite === "Onsite")
        setdisplay(appyjobs3)
      }
    }

    return (
        <div className='w-11/12 max-w-7xl m-auto'>
            <Helmet><title>Applied Jobs</title></Helmet>
            <h1 className='text-3xl font-semibold text-center p-2'>Applied Total Jobs Jobs-{appyjobs.length}</h1>
              <div className='py-2  flex space-x-2 justify-end'>
                <button onClick={()=>hanldefilter('all')} className={`${color === 'all' ? 'bg-[#16514a] text-white px-3 rounded-md':'bg-[#1f738f] text-white px-3 rounded-md'}`}>All</button>
                <button onClick={()=>hanldefilter('Remote')} className={`${color === "Remote" ? 'bg-[#16514a] text-white px-3 rounded-md':'bg-[#1f738f] text-white px-3 rounded-md'}`}>Remote</button>
                <button onClick={()=>hanldefilter('Onsite')} className={`${color === "Onsite" ? 'bg-[#16514a] text-white px-3 rounded-md':'bg-[#1f738f] text-white px-3 rounded-md'}`}>Onsite</button>
              </div>
            <div className='space-y-4'>
            {display?.map(j=><AppCard key={j.id} appyjobsall={j}></AppCard>)}
            </div>

        </div>
    );
};

export default Appliedjobs;
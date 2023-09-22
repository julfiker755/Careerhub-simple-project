import React, { useEffect, useState } from 'react';
import Catecard from './Catecard/Catecard';

const Catagori = () => {
    const [catagori,setcatagori]=useState([])
    useEffect(()=>{
        (()=>{
            fetch('./categories.json')
            .then(res=>res.json())
            .then(data=>setcatagori(data))
        })()
    },[])

    return (
        <div className='my-10 w-11/12 max-w-7xl m-auto'>
            <div className='text-center'>
                <h1 className='text-3xl font-semibold'>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4 gap-4'>
                {catagori.map(cateobj=><Catecard key={cateobj.id} cateobj={cateobj}></Catecard>)}
            </div>
        </div>
    );
};

export default Catagori;
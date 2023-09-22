import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import { Helmet } from 'react-helmet-async';
import Catagori from './Catagori/Catagori';
import Jobs from './Jobs/Jobs';

const Home = () => {
    const [jobs,setjobs]=useState([])
    useEffect(()=>{
        (()=>{
            fetch('./jobs.json')
            .then(res=>res.json())
            .then(data=>setjobs(data))
        })()
    },[])
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Catagori ></Catagori>
            <Jobs jobs={jobs}></Jobs>
        </div>
    );
};

export default Home;
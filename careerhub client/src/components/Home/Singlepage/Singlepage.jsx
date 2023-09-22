import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../../utily/Localstroage';
import { Helmet } from 'react-helmet-async';

const Singlepage = () => {
    const { id } = useParams()
    const [single, setjob] = useState([])
    // scroll top body contents
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    //    fetch data for website
    useEffect(() => {
        (() => {
            fetch('../jobs.json')
                .then(res => res.json())
                .then(data => setjob(data))
        })()
    }, [id])
    const finddata=single.find(d=>d.id === parseFloat(id))
    
    const {job_description,job_responsibility,experiences,educational_requirements,salary,job_title
    }= finddata || {}
    // handleapply--------------------------
    const handleapply=()=>{
        // localstroage id save-----
        saveJobApplication(parseFloat(id))

        // react tostify
        toast.success('👌 Appy  Add successfull', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    return (
        <div className='w-11/12 max-w-7xl m-auto'>
            <Helmet>
                <title>Single page</title>
            </Helmet>
            <div className='py-2 bg-[#2494ae] h-[100px] flex justify-center items-center mb-2 rounded-md text-center'>
                <h1 className='text-3xl text-white font-extrabold'>Job Details</h1>
            </div>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-[1fr,350px]'>
                <div>
                    <p><span className='text-base font-bold'>Job Description:</span> {job_description}</p>
                    <p><span className='text-base font-bold'>Job Responsibility:</span> {job_responsibility}</p>
                    <div>
                        <h1 className='text-base font-bold'>Educational Requirements:</h1>
                        <p>{educational_requirements}</p>
                    </div>
                    <div>
                        <h1 className='text-base font-bold'>Experiences:</h1>
                        <p>{experiences}</p>
                    </div>
                </div>
                <div className='bg-[#F4F1FF] p-4 rounded-md'>
                    <h1 className='font-semibold text-xl mb-2'>Job Details</h1>
                    <hr></hr>
                    <h1><span className='font-bold'>Salary:</span>{salary}</h1>
                    <h1><span className='font-bold'>Job Title :</span>{job_title}</h1>
                    <h1 className='font-semibold text-xl my-2'>Contact Information</h1>
                    <hr />
                    <h1><span className='font-bold'>Phone:</span>{finddata?.contact_information?.phone}</h1>
                    <h1><span className='font-bold'>Email:</span>{finddata?.contact_information?.email}</h1>
                    <h1><span className='font-bold'>Address:</span>{finddata?.contact_information?.address}</h1>
                    <button onClick={()=>handleapply()} className='bg-[#30cee3] text-white py-2 w-full my-2 rounded-md'>Apply Now</button>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
        </div>
    );
};

export default Singlepage;
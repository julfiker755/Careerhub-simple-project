import React from 'react';

const Footder = () => {
    return (
        <div className='bg-[#191919] text-[#dad6d6] py-5' >
            <div className='w-11/12 gap-4 max-w-7xl m-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
                <div>
                    <h1 className='text-3xl font-semibold mb-2'>CareerHub</h1>
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                </div>
                {/* colurmn1 */}
                <div>
                    <h1 className='text-2xl mb-2 font-semibold'>Company</h1>
                    <ul className='space-y-px'>
                        <li>About Us</li>
                        <li>Work</li>
                        <li>Latest News</li>
                        <li>Careers</li>
                    </ul>
                </div>
                {/* column 2 */}
                <div>
                    <h1 className='text-2xl font-semibold mb-2'>Product</h1>
                    <ul className='space-y-px'>
                        <li>Prototype</li>
                        <li>Plans & Pricing</li>
                        <li>Customers</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                 {/* column 3 */}
                 <div>
                    <h1 className='text-2xl font-semibold mb-2'>Support</h1>
                    <ul className='space-y-px'>
                        <li>Help Desk</li>
                        <li>Sales</li>
                        <li>Become a Partner</li>
                        <li>Developers</li>
                    </ul>
                </div>
                  {/* column 4 */}
                  <div>
                    <h1 className='text-2xl font-semibold mb-2'>Contact</h1>
                    <ul className='space-y-px'>
                        <li>524 Broadway , NYC</li>
                        <li>+1 777-978-5570</li>
                    </ul>
                </div>
            </div>
            <div className='w-11/12 gap-4 max-w-7xl m-auto py-2 mt-5'>
                <hr/>
                <div className='flex justify-between py-2'>
                    <h1>@2023 CareerHub. All Rights Reserved</h1>
                    <h1>Powered by CareerHub</h1>
                </div>
            </div>
        </div>
    );
};

export default Footder;
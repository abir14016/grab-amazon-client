import React from 'react';
import { Link } from 'react-router-dom';
import './Platfom.css';
import platfom from '../../../../assets/temporaryIncome/platfom/platfom.png'

const Platfom = () => {
    return (
        <div className='background-color'>
            {/* NavBar Start */}
            <div className="navbar bg-white">
                <div>
                    <Link className='ml-6' to='/'>return</Link>
                </div>
                <div className='mx-auto'>
                    <h6 className='uppercase'>platfom</h6>
                </div>
            </div>
            {/* NavBar End */}

            <div className='my-4'>
                <div className='bg-white rounded-md m-3'>
                    <h1 className='font-bold pt-7 text-sm'>
                        <mark>GRAB AMAZON - AUGUST 09 2022</mark>
                    </h1>
                    <div className='text-left px-3 font-bold text-sm'>
                        <p>Dear user.</p>
                        <p>Welcome to our <span className='text-primary'>GRAB AMAZON</span> application as a third-party smart order matching platform that has partnered with international online shopping platforms  Amazon</p>
                        <p className='mt-4'>Stores using our smart shopping system can determine the amount of sales and credit limits on the platform. Real users need to provide their address, phone number and smart order information, and after combining it with existing orders, merchants will pay our users a commission at the end of the order.</p>
                    </div>
                    <div className='px-3 pb-6 pt-3 flex justify-center'>
                        <img src={platfom} alt="pltfomImg" />
                    </div>
                </div>
                <div className='py-4'></div>
            </div>
        </div>
    );
};

export default Platfom;
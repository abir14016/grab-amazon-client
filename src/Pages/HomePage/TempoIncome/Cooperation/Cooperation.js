import React from 'react';
import { Link } from 'react-router-dom';
import './Cooperation.css';
import cooperation from '../../../../assets/temporaryIncome/cooperation/cooperation.jpg';


const Cooperation = () => {
    return (
        <div className='background-color'>
            {/* NavBar Start */}
            <div className="navbar bg-white">
                <div>
                    <Link className='ml-6' to='/'>return</Link>
                </div>
                <div className='mx-auto'>
                    <h6 className='uppercase'>COOPERATION</h6>
                </div>
            </div>
            {/* NavBar End */}
            <div className='bg-white my-4 rounded-md m-3'>
                <div className='flex justify-center py-10'>
                    <img src={cooperation} alt="cooperationImg" />
                </div>
                <div className='text-left px-3 font-bold text-sm pb-6'>
                    <h2 className='mt-3'>Welcome to the cooperation agent</h2>
                    <h2 className='mt-3'>We really benefit from your cooperation to build a company with us</h2>
                    <h2 className='mt-3'>please submit your expertise or your habits in promoting our company to the admin concerned</h2>
                </div>
            </div>
            <div className='py-4'></div>
        </div>
    );
};

export default Cooperation;
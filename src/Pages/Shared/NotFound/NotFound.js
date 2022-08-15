import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../../assets/notfound/notFound.png';

const NotFound = () => {
    return (
        <div className='h-screen flex items-center justify-center pb-10 bg-[#b8e1ec]'>
            <div>
                <div>
                    <img className='w-[200px] mx-4' src={notFound} alt="notFoundImage" />
                </div>
            </div>
            <div>
                <h1 className='text-9xl mb-10 font-serif'>
                    <span className='text-[#f0e395]'>4</span>
                    <span className='text-[#feb485]'>0</span>
                    <span className='text-[#d15c95]'>4</span>
                </h1>
                <h5 className='text-center mb-4 text-xl'>Sorry, we can't find that page! Don't worry though, everything is STILL AWESOME!</h5>
                <Link to='/' className='btn btn-primary text-white'>Go Back Home</Link>
            </div>
        </div>
    );
};

export default NotFound;
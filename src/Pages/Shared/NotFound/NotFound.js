import React from 'react';
import notfoundBackground from '../../../assets/notfound/notFoundBackground.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
    const myStyle = {
        backgroundImage: `url(${notfoundBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: 'cover'

    }
    return (
        <div style={myStyle} className='h-screen flex items-end justify-center pb-10'>
            <div>
                <h5 className='text-center mb-4 text-xl'>Sorry, we can't find that page! Don't worry though, everything is STILL AWESOME!</h5>
                <Link to='/' className='btn btn-primary text-white'>Go Back Home</Link>
            </div>
        </div>
    );
};

export default NotFound;
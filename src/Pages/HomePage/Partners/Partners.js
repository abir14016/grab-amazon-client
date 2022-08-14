import React from 'react';
import './Partners.css';
import alibaba from '../../../assets/partners/alibaba.png';
import amazon from '../../../assets/partners/amazon.png';

const Partners = () => {
    return (
        <div className='container'>
            <h6 className='uppercase text-base font-semibold mb-4 mt-8 text-left'>Product sales cooperation</h6>
            <div className='flex'>
                <div className='card shadow-sm border-0 text-white mr-2 md:mr-3 lg:mr-4'>
                    <img src={amazon} alt="amazonImages" />
                </div>
                <div className='card shadow-sm border-0 text-white ml-2 md:ml-3 lg:ml-4'>
                    <img src={alibaba} alt="alibabaImages" />
                </div>
            </div>
        </div>
    );
};

export default Partners;
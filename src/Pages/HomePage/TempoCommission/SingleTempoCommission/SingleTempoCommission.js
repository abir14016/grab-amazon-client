import React from 'react';

const SingleTempoCommission = ({ singleTempoCommission }) => {
    const { userName, earning } = singleTempoCommission;
    return (
        <div className='shadow-lg flex py-4 rounded-2xl mt-4 items-end scroll-text bg-white'>
            <div className='flex justify-center w-1/4'>
                <p className='font-semibold'>{userName}</p>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className='flex w-3/4'>
                <div className='text-left'>
                    <p className='font-semibold'>${earning}</p>
                    <p className='text-sm opacity-70'>Earnings Today</p>
                </div>
            </div>
        </div>
    );
};

export default SingleTempoCommission;
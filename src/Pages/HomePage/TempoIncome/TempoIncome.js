import React from 'react';
import { Link } from 'react-router-dom';
import home1 from '../../../assets/temporaryIncome/home1.png';
import home2 from '../../../assets/temporaryIncome/home2.png';
import home3 from '../../../assets/temporaryIncome/home3.png';
import home4 from '../../../assets/temporaryIncome/home4.png';

const TempoIncome = () => {
    return (
        <div className='container'>
            <h2 className='uppercase text-base font-semibold mb-4 mt-8'>Temporary income</h2>
            <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-7'>
                <div className='p-4 rounded-lg shadow-lg bg-white mb-3'>
                    <h5 className="mb-0 font-weight-normal">$17.17</h5>
                    <p className="text-mute small text-secondary">Earnings Today</p>
                </div>
                <div className='p-4 rounded-lg shadow-lg bg-white mb-3'>
                    <h5 className="mb-0 font-weight-normal">$17.17</h5>
                    <p className="text-mute small text-secondary">Today's commission</p>
                </div>
                <div className='p-4 rounded-lg shadow-lg bg-white mb-3'>
                    <h5 className="mb-0 font-weight-normal">$17.17</h5>
                    <p className="text-mute small text-secondary">Temporary income</p>
                </div>
                <div className='p-4 rounded-lg shadow-lg bg-white mb-3'>
                    <h5 className="mb-0 font-weight-normal">$0</h5>
                    <p className="text-mute small text-secondary">Interest</p>
                </div>
            </div>
            <div className='grid grid-cols-4 lg:grid-cols-4 md:grid-cols-4 gap-7'>
                <Link to='#'>
                    <div className='link link-hover decoration-primary'>
                        <img src={home1} alt="homeImage" />
                        <p>
                            <small className='text-primary font-bold text-xs'>PLATFOM</small>
                        </p>
                    </div>
                </Link>
                <Link to='#'>
                    <div className='link link-hover decoration-primary'>
                        <img src={home2} alt="homeImage" />
                        <p>
                            <small className='text-primary font-bold text-xs'>VIP MEMBER</small>
                        </p>
                    </div>
                </Link>
                <Link to='#'>
                    <div className='link link-hover decoration-primary'>
                        <img src={home3} alt="homeImage" />
                        <p>
                            <small className='text-primary font-bold text-xs'>COOPERATION</small>
                        </p>
                    </div>
                </Link>
                <Link to='#'>
                    <div className='link link-hover decoration-primary'>
                        <img src={home4} alt="homeImage" />
                        <p>
                            <small className='text-primary font-bold text-xs'>CERTIFICATE</small>
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default TempoIncome;
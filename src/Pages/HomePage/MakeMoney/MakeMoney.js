import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointer, faHandHoldingUsd, faCircleDollarToSlot, faMoneyCheckDollar, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import React from 'react';

const MakeMoney = () => {
    return (
        <div className='container'>
            <button className='btn btn-primary btn-block rounded-3xl py-1'>
                <span><FontAwesomeIcon className='text-slate-200 mx-2 text-lg' icon={faHandPointer} /></span>
                <span className='text-white text-base'>Start Making Money</span>
            </button>
            <div className='flex justify-center'>
                <Link to="#">
                    <div className='px-4 pt-5 link link-hover decoration-primary'>
                        <FontAwesomeIcon className='text-primary bg-primary/[.3] p-5 rounded-full text-xl' icon={faHandHoldingUsd} />
                        <p className='text-sm'>Invest</p>
                    </div>
                </Link>
                <Link to="#">
                    <div className='px-4 pt-5 link link-hover decoration-primary'>
                        <FontAwesomeIcon className='text-primary bg-primary/[.3] p-5 rounded-full text-xl' icon={faCircleDollarToSlot} />
                        <p className='text-sm'>Recharge</p>
                    </div>
                </Link>
                <Link to="#">
                    <div className='px-4 pt-5 link link-hover decoration-primary'>
                        <FontAwesomeIcon className='text-primary bg-primary/[.3] p-5 rounded-full text-xl' icon={faMoneyCheckDollar} />
                        <p className='text-sm'>Withdraw</p>
                    </div>
                </Link>
                <Link to="#">
                    <div className='px-4 pt-5 link link-hover decoration-primary'>
                        <FontAwesomeIcon className='text-primary bg-primary/[.3] p-5 rounded-full text-xl' icon={faShareNodes} />
                        <p className='text-sm'>Invite</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default MakeMoney;
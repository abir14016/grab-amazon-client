import React from 'react';
import Partners from '../Partners/Partners';
import './Home.css';
import TempoIncome from '../TempoIncome/TempoIncome';
import Banner from '../Banner/Banner';
import MakeMoney from '../MakeMoney/MakeMoney';
import Membership from '../Membership/Membership';

const Home = () => {
    return (
        <div className='body-background'>
            <Banner></Banner>
            <MakeMoney></MakeMoney>
            <TempoIncome></TempoIncome>
            <Membership></Membership>
            <Partners></Partners>
        </div>
    );
};

export default Home;
import React from 'react';
import Partners from '../Partners/Partners';
import './Home.css';
import TempoIncome from '../TempoIncome/TempoIncome';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='body-background'>
            <Banner></Banner>
            <TempoIncome></TempoIncome>
            <Partners></Partners>
        </div>
    );
};

export default Home;
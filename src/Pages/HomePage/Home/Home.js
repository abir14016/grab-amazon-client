import React from 'react';
import Partners from '../Partners/Partners';
import './Home.css';
import TempoIncome from '../TempoIncome/TempoIncome';

const Home = () => {
    return (
        <div className='body-background'>
            <TempoIncome></TempoIncome>
            <Partners></Partners>
        </div>
    );
};

export default Home;
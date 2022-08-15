import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleTempoCommission from './SingleTempoCommission/SingleTempoCommission';
import './TempoCommission.css';

const TempoCommission = () => {
    const [tempoCommissions, setTempoCommission] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/commission")
            .then(res => res.json())
            .then(data => setTempoCommission(data));
    }, [])
    return (
        <div className='container'>
            <h2 className='text-left font-semibold text-md mb-4'>TEMPORARY MEMBER COMMISSION</h2>
            <div style={{ height: 270, overflow: 'auto' }} className="overflow-auto no-scrollbar-1 no-scrollbar-2">
                {
                    tempoCommissions.map(singleTempoCommission => <SingleTempoCommission
                        key={singleTempoCommission._id}
                        singleTempoCommission={singleTempoCommission}
                    ></SingleTempoCommission>)
                }
            </div>
        </div>
    );
};

export default TempoCommission;
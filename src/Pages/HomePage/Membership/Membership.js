import React, { useState } from 'react';
import { useEffect } from 'react';
import SingleMembership from './SingleMembership/SingleMembership';

const Membership = () => {
    const [memberships, setMemberships] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/membership")
            .then(res => res.json())
            .then(data => setMemberships(data))
    }, [])
    return (
        <div className='container'>
            <h2 className='text-left font-semibold text-md'>MEMBERSHIP</h2>
            {
                memberships.map(singleMembership => <SingleMembership
                    key={singleMembership._id}
                    singleMembership={singleMembership}
                ></SingleMembership>)
            }
        </div>
    );
};

export default Membership;
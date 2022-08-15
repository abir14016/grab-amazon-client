import React, { useState } from 'react';
import { useEffect } from 'react';
import vipTextImg from "../../../assets/membership/vip-text.png";
// import './Membership.css';

const Membership = () => {
    const myStyle = {
        backgroundImage: `url("${vipTextImg}"`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "200px 80px",
        backgroundPosition: "center",
    };
    const [memberships, setMemberships] = useState([]);
    const join = "Join>>";
    const CurrentLevel = "Current Level";
    useEffect(() => {
        fetch("http://localhost:5000/membership")
            .then(res => res.json())
            .then(data => setMemberships(data))
    }, []);

    return (
        <div className='container'>
            <h2 className='text-left font-semibold text-md mb-4'>MEMBERSHIP</h2>

            <div className='px-3 rounded-lg mb-4 py-4' style={{ backgroundImage: 'linear-gradient(to right, #01e60d,#0809e8)' }}>
                <div style={myStyle} className="flex justify-between text-white text-left">
                    <div className='flex justify-center items-center'>
                        <div>
                            <img src={memberships[0]?.image} alt="level" />
                        </div>
                        <div className='pl-3'>
                            <h1 className='text-xl'>{memberships[0]?.level}</h1>
                            <p className='text-xs mb-2 opacity-70'>Required Investment ${memberships[0]?.reqInvestment}</p>
                            <p className='text-xs opacity-70'>Commission {memberships[0]?.commission}% | {memberships[0]?.order} Orders</p>
                        </div>
                    </div>

                    <div className='text-xl'>
                        {
                            memberships[0]?.isCurrent ? <h2>{CurrentLevel}</h2> : <h2>{join}</h2>
                        }
                    </div>
                </div>
            </div>

            <div className='px-3 rounded-lg mb-4 py-4' style={{ backgroundImage: 'linear-gradient(to right, #f30c04,#feef01)' }}>
                <div style={myStyle} className="flex justify-between text-white text-left">
                    <div className='flex justify-center items-center'>
                        <div>
                            <img src={memberships[1]?.image} alt="level" />
                        </div>
                        <div className='pl-3'>
                            <h1 className='text-xl'>{memberships[1]?.level}</h1>
                            <p className='text-xs mb-2 opacity-70'>Required Investment ${memberships[1]?.reqInvestment}</p>
                            <p className='text-xs opacity-70'>Commission {memberships[1]?.commission}% | {memberships[1]?.order} Orders</p>
                        </div>
                    </div>

                    <div className='text-xl'>
                        {
                            memberships[1]?.isCurrent ? <h2>{CurrentLevel}</h2> : <h2>{join}</h2>
                        }
                    </div>
                </div>
            </div>

            <div className='px-3 rounded-lg mb-4 py-4' style={{ backgroundImage: 'linear-gradient(to right, #fe560f,#f204f5)' }}>
                <div style={myStyle} className="flex justify-between text-white text-left">
                    <div className='flex justify-center items-center'>
                        <div>
                            <img src={memberships[2]?.image} alt="level" />
                        </div>
                        <div className='pl-3'>
                            <h1 className='text-xl'>{memberships[2]?.level}</h1>
                            <p className='text-xs mb-2 opacity-70'>Required Investment ${memberships[2]?.reqInvestment}</p>
                            <p className='text-xs opacity-70'>Commission {memberships[2]?.commission}% | {memberships[2]?.order} Orders</p>
                        </div>
                    </div>

                    <div className='text-xl'>
                        {
                            memberships[2]?.isCurrent ? <h2>{CurrentLevel}</h2> : <h2>{join}</h2>
                        }
                    </div>
                </div>
            </div>

            <div className='px-3 rounded-lg mb-4 py-4' style={{ backgroundImage: 'linear-gradient(to right, #770efd,#06f5e1)' }}>
                <div style={myStyle} className="flex justify-between text-white text-left">
                    <div className='flex justify-center items-center'>
                        <div>
                            <img src={memberships[3]?.image} alt="level" />
                        </div>
                        <div className='pl-3'>
                            <h1 className='text-xl'>{memberships[3]?.level}</h1>
                            <p className='text-xs mb-2 opacity-70'>Required Investment ${memberships[3]?.reqInvestment}</p>
                            <p className='text-xs opacity-70'>Commission {memberships[3]?.commission}% | {memberships[3]?.order} Orders</p>
                        </div>
                    </div>

                    <div className='text-xl'>
                        {
                            memberships[3]?.isCurrent ? <h2>{CurrentLevel}</h2> : <h2>{join}</h2>
                        }
                    </div>
                </div>
            </div>

            <div className='px-3 rounded-lg mb-4 py-4' style={{ backgroundImage: 'linear-gradient(to right, #c6f909,#4498af)' }}>
                <div style={myStyle} className="flex justify-between text-white text-left">
                    <div className='flex justify-center items-center'>
                        <div>
                            <img src={memberships[4]?.image} alt="level" />
                        </div>
                        <div className='pl-3'>
                            <h1 className='text-xl'>{memberships[4]?.level}</h1>
                            <p className='text-xs mb-2 opacity-70'>Required Investment ${memberships[4]?.reqInvestment}</p>
                            <p className='text-xs opacity-70'>Commission {memberships[4]?.commission}% | {memberships[4]?.order} Orders</p>
                        </div>
                    </div>

                    <div className='text-xl'>
                        {
                            memberships[4]?.isCurrent ? <h2>{CurrentLevel}</h2> : <h2>{join}</h2>
                        }
                    </div>
                </div>
            </div>

            <div className='px-3 rounded-lg mb-4 py-4' style={{ backgroundImage: 'linear-gradient(to right, #79f6f6,#24282c)' }}>
                <div style={myStyle} className="flex justify-between text-white text-left">
                    <div className='flex justify-center items-center'>
                        <div>
                            <img src={memberships[5]?.image} alt="level" />
                        </div>
                        <div className='pl-3'>
                            <h1 className='text-xl'>{memberships[5]?.level}</h1>
                            <p className='text-xs mb-2 opacity-70'>Required Investment ${memberships[5]?.reqInvestment}</p>
                            <p className='text-xs opacity-70'>Commission {memberships[5]?.commission}% | {memberships[5]?.order} Orders</p>
                        </div>
                    </div>

                    <div className='text-xl'>
                        {
                            memberships[5]?.isCurrent ? <h2>{CurrentLevel}</h2> : <h2>{join}</h2>
                        }
                    </div>
                </div>
            </div>

            <div className='px-3 rounded-lg mb-4 py-4' style={{ backgroundImage: 'linear-gradient(to right, #5e05a3,#0893fa)' }}>
                <div style={myStyle} className="flex justify-between text-white text-left">
                    <div className='flex justify-center items-center'>
                        <div>
                            <img src={memberships[6]?.image} alt="level" />
                        </div>
                        <div className='pl-3'>
                            <h1 className='text-xl'>{memberships[6]?.level}</h1>
                            <p className='text-xs mb-2 opacity-70'>Required Investment ${memberships[6]?.reqInvestment}</p>
                            <p className='text-xs opacity-70'>Commission {memberships[6]?.commission}% | {memberships[6]?.order} Orders</p>
                        </div>
                    </div>

                    <div className='text-xl'>
                        {
                            memberships[6]?.isCurrent ? <h2>{CurrentLevel}</h2> : <h2>{join}</h2>
                        }
                    </div>
                </div>
            </div>

            <div className='px-3 rounded-lg mb-4 py-4' style={{ backgroundImage: 'linear-gradient(to right, #fc062f,#05fb28)' }}>
                <div style={myStyle} className="flex justify-between text-white text-left">
                    <div className='flex justify-center items-center'>
                        <div>
                            <img src={memberships[7]?.image} alt="level" />
                        </div>
                        <div className='pl-3'>
                            <h1 className='text-xl'>{memberships[7]?.level}</h1>
                            <p className='text-xs mb-2 opacity-70'>Required Investment ${memberships[7]?.reqInvestment}</p>
                            <p className='text-xs opacity-70'>Commission {memberships[7]?.commission}% | {memberships[7]?.order} Orders</p>
                        </div>
                    </div>

                    <div className='text-xl'>
                        {
                            memberships[7]?.isCurrent ? <h2>{CurrentLevel}</h2> : <h2>{join}</h2>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Membership;
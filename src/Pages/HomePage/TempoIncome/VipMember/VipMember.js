import React from 'react';
import { Link } from 'react-router-dom';
import './VipMember.css';
import vipMember1 from "../../../../assets/temporaryIncome/vipmember/vipMember1.png";
import vipMember2 from "../../../../assets/temporaryIncome/vipmember/vipMember2.jpg"
import vipMember3 from '../../../../assets/temporaryIncome/vipmember/vipMember3.jpg';
import vipMember4 from '../../../../assets/temporaryIncome/vipmember/vipMember4.jpg';

const VipMember = () => {
    return (
        <div className='background-color'>
            {/* NavBar Start */}
            <div className="navbar bg-white">
                <div>
                    <Link className='ml-6' to='/'>return</Link>
                </div>
                <div className='mx-auto'>
                    <h6 className='uppercase'>VIP MEMBER</h6>
                </div>
            </div>
            {/* NavBar End */}

            <div className='bg-white my-4 rounded-md m-3'>
                {/* section1 start */}
                <div>
                    <div className='flex justify-center py-10'>
                        <img src={vipMember1} alt="vipMemberImg" />
                    </div>
                    <div className='text-left px-3 font-bold text-sm'>
                        <p>Due to the large amount of data reloading, please check the platform account carefully before reloading.</p>
                        <div className='my-4'>
                            <p>Platform accounts change from time to time.</p>
                            <p>If you have any questions, click on the platform's online customer service notification.</p>
                        </div>
                        <p>Note: Withdrawals must be strictly verified, arrival time specific to the bank!</p>
                        <p>The product will arrive 24 hours before the next day (T+1).</p>
                    </div>
                </div>
                {/* section1 end */}

                {/* section2 start */}
                <div>
                    <div className='flex justify-center py-10'>
                        <img src={vipMember2} alt="vipMemberImg" />
                    </div>
                    <div className='text-left px-3 font-bold text-sm'>
                        <p>VIP0: Free</p>
                        <p>3 orders per day</p>
                        <p>15% return per order</p>
                        <p>Validity period 2 days</p>
                    </div>
                    <div className='text-left px-3 font-bold text-sm mt-7'>
                        <p>VIP0: 20.00</p>
                        <p>6 orders per day</p>
                        <p>25% return per order</p>
                        <p>Validity period 14 days</p>
                    </div>
                    <div className='text-left px-3 font-bold text-sm mt-7'>
                        <p>VIP0: 50.00</p>
                        <p>9 orders per day</p>
                        <p>35% return per order</p>
                        <p>Validity period 30 days</p>
                    </div>
                    <div className='text-left px-3 font-bold text-sm mt-7'>
                        <p>VIP0: 200.00</p>
                        <p>12 orders per day</p>
                        <p>45% return per order</p>
                        <p>Validity period 60 days</p>
                    </div>
                    <div className='text-left px-3 font-bold text-sm mt-7'>
                        <p>VIP0: 700.00</p>
                        <p>15 orders per day</p>
                        <p>55% return per order</p>
                        <p>Validity period 90 days</p>
                    </div>
                    <div className='text-left px-3 font-bold text-sm mt-7'>
                        <p>VIP0: 3000.00</p>
                        <p>30 orders per day</p>
                        <p>66% return per order</p>
                        <p>Validity period 200 days</p>
                    </div>
                    <div className='text-left px-3 font-bold text-sm mt-7'>
                        <p>VIP0: 4000.00</p>
                        <p>40 orders per day</p>
                        <p>76% return per order</p>
                        <p>Validity period 500 days</p>
                    </div>
                    <div className='text-left px-3 font-bold text-sm mt-7'>
                        <p>VIP0: 5000.00</p>
                        <p>50 orders per day</p>
                        <p>106% return per order</p>
                        <p>Validity period 700 days</p>
                    </div>
                </div>
                {/* section2 end */}

                {/* section3 start */}
                <div>
                    <div className='flex justify-center py-10'>
                        <img src={vipMember3} alt="vipMemberImg" />
                    </div>
                    <div className='text-left px-3 font-bold text-sm mt-7'>
                        <h6>AS FOR HOW TO RAISE VIP BY INVITE FRIENDS/REBATES</h6>
                        <h6>VIP1: 150 REBATES/FRIENDS</h6>
                        <h6>VIP2: 250 REBATES/FRIENDS</h6>
                        <h6>VIP3: 500 REbates/FRIENDS</h6>
                        <h6>VIP4: 1000 REBATES/FRIENDS</h6>
                        <h6>VIP5: 2000 REBATE/FRIENDS</h6>
                        <h6>VIP6: 5000 REBATE/FRIENDS</h6>
                        <h6>VIP7: 10000 REBATE/FRIENDS</h6>
                    </div>
                </div>
                {/* section3 end */}

                {/* section4 start */}
                <div>
                    <div className='text-left px-3 font-bold text-sm mt-7'>
                        <h6>Important note: Do not use the same IP to login to multiple accounts to earn commissions.</h6>
                        <h6>Important note: After taking the order finished everything, you will wait Until 00.00</h6>
                    </div>
                    <div className='flex justify-center leading-3 pb-6 px-3'>
                        <img src={vipMember4} alt="vipMemberImg" />
                    </div>
                </div>
                {/* section4 end */}
            </div>
            <div className='py-4'></div>
        </div>
    );
};

export default VipMember;
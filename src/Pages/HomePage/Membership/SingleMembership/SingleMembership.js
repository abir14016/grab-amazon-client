// import React from 'react';

// const SingleMembership = ({ singleMembership }) => {
//     const { isCurrent, image, level, reqInvestment, commission, order, bgStart, bgEnd } = singleMembership;
//     const join = "Join>>";
//     const CurrentLevel = "Current Level";
//     return (
//         <div className={`flex justify-between mb-4 bg-gradient-to-r from-[${bgStart}] to-[${bgEnd}]`}>
//             <div className='flex justify-center'>
//                 <div>
//                     <img src={image} alt="level" />
//                 </div>
//                 <div>
//                     <h1>{level}</h1>
//                     <p>Required Investment ${reqInvestment}</p>
//                     <p>Commission {commission}% | {order} Orders</p>
//                     <p>{bgStart},{bgEnd}</p>
//                 </div>
//             </div>

//             <div>
//                 {
//                     isCurrent ? <h2>{CurrentLevel}</h2> : <h2>{join}</h2>
//                 }
//             </div>
//         </div>
//     );
// };

// export default SingleMembership;
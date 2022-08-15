import React from 'react';
import banner1 from "../../../assets/banner/banner-1.jpg";
import banner2 from "../../../assets/banner/banner-2.jpg";
import banner3 from "../../../assets/banner/banner-3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar } from '@fortawesome/free-solid-svg-icons'

const Banner = () => {
    return (
        <div className='mb-20'>
            <div className='mx-0 md:mx-[4rem] lg:mx-[3rem] xl:mx-[4rem] 2xl:mx-[12rem] relative'>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img style={{ height: 280 }} src={banner1} alt='banner1' className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle btn-primary">❮</a>
                            <a href="#slide2" className="btn btn-circle btn-primary">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img style={{ height: 280 }} src={banner2} alt='banner2' className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle btn-primary">❮</a>
                            <a href="#slide3" className="btn btn-circle btn-primary">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img style={{ height: 280 }} src={banner3} alt='banner3' className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle btn-primary">❮</a>
                            <a href="#slide1" className="btn btn-circle btn-primary">❯</a>
                        </div>
                    </div>
                    <div className='mx-5 md:mx-[1rem] lg:mx-[1rem] xl:mx-[1rem] 2xl:mx-[1rem] shadow-2xl py-5 absolute inset-x-0 bottom-0 mb-[-45px] flex justify-between items-center rounded-xl bg-white'>
                        <div className='text-left px-4'>
                            <p className='text-2xl opacity-90'><span><FontAwesomeIcon icon={faDollar} /></span></p>
                            <p className='opacity-70'>my balance</p>
                        </div>
                        <div className='px-4'>
                            <button className='btn btn-circle btn-primary text-2xl  text-white'><span><FontAwesomeIcon icon={faDollar} /></span></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;
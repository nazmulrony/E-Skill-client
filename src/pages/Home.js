import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../assets/hero.png'

const Home = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 bg-secondary text-light p-8 md:py-32 md:px-28 px-4 gap-6 '>
            <div className='grid place-items-center order-last md:col-span-2'>
                <div>
                    <h1 className=' text-5xl md:text-6xl font-semibold'>Set yourself up for success with <span className='text-primary'>E-Skills</span> courses!</h1>
                    <h4 className='text-2xl'>Join our courses to enhance your skills and boost up your learning speed with  expert's guidelines.</h4>
                    <button className='bg-primary py-2 px-4 my-2 rounded-lg text-gray-300 hover:bg-pine hover:text-light duration-150'><Link to="/courses">Get Started</Link></button>
                </div>
            </div>
            <div className='grid place-items-center  md:order-last '>

                <img src={hero} alt="hero-img" className='w-2/3  md:w-full ' />
            </div>


        </div>
    );
};

export default Home;
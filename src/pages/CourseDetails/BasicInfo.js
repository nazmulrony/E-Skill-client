import React from 'react';
import { FaStar } from 'react-icons/fa';
import { MdOutlineReviews } from 'react-icons/md';


const BasicInfo = ({ course }) => {
    const { title, description, rating, reviews, instructor } = course;
    return (
        <div>
            <h3 className='text-4xl font-semibold'>{title}</h3>
            <h5 className='text-xl font-light'>{description}</h5>
            <div className='flex justify-start gap-6 text-amber-500 my-1 '>
                <p className='flex items-center gap-1 justify-start  text-sm'> Rating<span>{rating}</span><FaStar /></p>
                <p className='flex items-center gap-1 justify-start  text-sm'><MdOutlineReviews /><span>{reviews}</span> (reviews) </p>
            </div>
            <p className='text-sm'>Created by <span className='text-teal-400'>{instructor}</span></p>
        </div>
    );
};

export default BasicInfo;
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { MdOutlineReviews } from 'react-icons/md';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { title, picture, rating, reviews, instructor, price, id } = course
    return (
        <div className='p-2 bg-primary rounded-lg shadow-lg shadow-gray-900 text-light flex flex-col'>
            <img src={picture} alt=""
                className='rounded-lg ' />
            <div className='flex-1'>
                <h4 className=' text-secondary text-xl font-semibold leading-tight mt-2'>{title}</h4>
                <p className=' text-gray-900'>{instructor}</p>
                <div className='flex justify-start gap-6 text-amber-500 my-1 '>
                    <p className='flex items-center gap-1 justify-start  text-sm'>Rating<span>{rating}</span><FaStar /></p>
                    <p className='flex items-center gap-1 justify-start  text-sm'><MdOutlineReviews /><span>{reviews}</span> (reviews) </p>
                </div>
                <h5 className='text-2xl font-thin text-secondary'>${price}</h5>
            </div>
            <Link to={`/course/${id}`} className='bg-secondary py-2 w-full rounded-md text-center hover:bg-darkTeal duration-100 mt-1'> View Course</Link>

        </div>
    );
};

export default CourseCard;
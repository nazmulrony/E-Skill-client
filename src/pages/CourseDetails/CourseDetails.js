import React from 'react';
import { FaStar } from 'react-icons/fa';
import { MdOutlineReviews } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';
import BasicInfo from './BasicInfo';
import Features from './Features';
import PriceButton from './PriceButton';
import Topics from './Topics';

const CourseDetails = () => {
    const course = useLoaderData();
    const { title, description, picture, rating, reviews, instructor, price, id, topics, features } = course;
    return (
        <div>
            <div className='py-2 md:py-12 px-2 md:px-28 grid grid-cols-3 gap-4 bg-secondary text-light'>

                <div className=' col-span-3 md:col-span-2'>
                    <img src={picture} alt=""
                        className='w-full md:hidden mb-2'
                    />
                    <BasicInfo course={course} />
                    <div className='md:hidden'>
                        <PriceButton price={price} className="md:hidden" />
                    </div>
                    <div className='bg-dimTeal md:hidden p-2'>

                        <Features features={features} />
                        <Topics topics={topics}></Topics>

                    </div>

                </div>
                <div className='col-span-1 relative'>
                    <div className=' bg-primary hidden md:block shadow-lg shadow-gray-900 text-light absolute right-5'>
                        <img src={picture} alt=""
                            className='w-full'
                        />
                        <div className='w-full p-4'>
                            <PriceButton price={price} />
                            <Features features={features} />
                        </div>

                    </div>
                </div>


            </div>

            <div className=' px-28 grid grid-cols-3 gap-4 bg-dimTeal '>
                <div className=' px-4 py-10 col-span-2 hidden md:block'>
                    <Topics topics={topics}></Topics>

                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
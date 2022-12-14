import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';
import Sidebar from './Sidebar';

const Courses = () => {
    const courses = useLoaderData();

    return (
        <div className=' grid grid-cols-4 bg-secondary md:py-8'>
            <div className='col-span-4 md:col-span-1'>
                <Sidebar />
            </div>
            <div className='col-span-4 grid grid-cols-1 md:col-span-3 md:grid-cols-3 gap-4 p-2 md:pr-10'>
                {
                    courses.slice(0, 15).map(course => <CourseCard
                        key={course.id} course={course} />)
                }
            </div>

        </div>
    );
};

export default Courses;
import React from 'react';

const CourseCard = ({ course }) => {
    const { title, picture, rating, reviews, instructor, price, id } = course
    return (
        <div className='p-2 bg-primary rounded-lg shadow-lg shadow-gray-900 text-light'>
            <img src={picture} alt=""
                className='rounded-lg' />
            <h4 className='text-2xl'>{title}</h4>
            <p>{instructor}</p>
            <div>

            </div>
            <h5>${price}</h5>

        </div>
    );
};

export default CourseCard;
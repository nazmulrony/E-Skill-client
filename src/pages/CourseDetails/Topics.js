import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'

const Topics = ({ topics }) => {
    return (
        <div className=' border p-4 border-secondary mt-2'>
            <h4 className='text-2xl text-secondary mb-2 font-semibold'>What you will learn in this course</h4>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-2 text-secondary'>
                {
                    topics.map((topic, index) =>
                        <li
                            key={index}
                            className=" mb-2 px-2"
                        >
                            <FaCheckCircle className='text-lg text-secondary inline' /> {topic}
                        </li>
                    )
                }
            </ul>

        </div>
    );
};

export default Topics;
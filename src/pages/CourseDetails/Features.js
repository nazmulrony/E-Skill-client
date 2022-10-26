import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Features = ({ features }) => {
    return (
        <>
            <h6 className='text-xl text-secondary'> This course includes</h6>
            <ul>
                {
                    features.map((feature, index) =>
                        <li
                            key={index}
                            className="flex items-center gap-1 text-secondary mb-1">
                            <BsFillPatchCheckFill className='text-secondary md:text-dimTeal' /> {feature}
                        </li>)
                }
            </ul>


        </>
    );
};

export default Features;
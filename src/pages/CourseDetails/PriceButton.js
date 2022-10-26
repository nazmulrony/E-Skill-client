import React from 'react';
import { Link } from 'react-router-dom';

const PriceButton = ({ price, id }) => {
    return (
        <>
            <div>

                <h5 className='text-4xl font-thin text-light my-2'>${price}</h5>
            </div>
            <Link to={`/checkout/${id}`} className='bg-primary mb-2 md:bg-secondary py-2 w-full  text-center hover:bg-pine md:hover:bg-darkTeal duration-100 mt-1 block'> Get Premium Access</Link>
        </>
    );
};

export default PriceButton;
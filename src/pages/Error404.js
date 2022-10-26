import React from 'react';

const Error404 = () => {
    return (
        <div className='bg-secondary h-[100vh] grid place-items-center px-3 text-center' >
            <div>
                <h3 className='text-primary text-5xl md:text-7xl font-bold'> 404 Error!</h3>
                <h5 className='text-light text-2xl'>The page you are trying access is not available.</h5>
            </div>
        </div>
    );
};

export default Error404;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const CheckOut = () => {
    const course = useLoaderData();
    const { title, price, } = course;
    const tax = Number((price * .15).toFixed(2));
    const discount = Number((price * .20).toFixed(2));
    const total = (Number(price) + tax - discount).toFixed(2);
    // console.log(typeof price, typeof tax, discount);

    const notify = () => {
        toast.success('Congratulations! You have successfully purchased the course.')
    }
    return (
        <div className='bg-primary  p-2 md:p-8'>
            <Toaster />
            <h4 className='text-3xl font-semibold text-secondary text-center my-4'> Checkout the course for lifetime access! </h4>
            <div className='bg-secondary  px-4 py-8 w-full md:w-1/3 mx-auto rounded-lg  flex flex-col gap-2 text-light '>
                <h4 className='flex gap-2'> <span className='font-semibold'>Course:</span> <span>{title}</span></h4>
                <hr />
                <p className='flex justify-between'><span>Price:   </span> <span>{price}</span></p>
                <hr />
                <p className='flex justify-between'><span>Tax:   </span> <span>{tax}</span></p>
                <hr />
                <p className='flex justify-between'><span>Discount:   </span> <span>{discount}</span></p>
                <hr />
                <p className='flex justify-between'><span>Total:   </span> <span>{total}</span></p>
                <hr />
                <button onClick={notify} className='bg-primary py-2 my-2 rounded-lg hover:bg-pine duration-150'>Checkout</button>
            </div>



        </div>
    );
};

export default CheckOut;
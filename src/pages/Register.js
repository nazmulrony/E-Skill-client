import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='bg-primary min-h-[90vh] px-2 py-4'>
            <div className="bg-secondary text-light max-w-md mx-auto px-4 py-6 rounded-lg shadow-2xl">
                <h2 className='text-center text-3xl mb-2 font-semibold'>Register</h2>
                <form >
                    <div className="flex flex-col mb-3">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="name" id="name" placeholder='Enter your full name' className='p-2 rounded-md text-secondary' required />
                    </div>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="photoURL">Photo URL</label>
                        <input type="text" name="photoURL" id="photoURL" placeholder='Enter your photo URL' className='p-2 rounded-md text-secondary' required />
                    </div>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder='Enter your email' className='p-2 rounded-md text-secondary' required />
                    </div>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" className='p-2 rounded-md text-secondary' placeholder='Enter your password' required />
                    </div>
                    <button type="submit" className=' w-full bg-primary py-2 rounded-md mt-4 text-[20px] hover:bg-pine duration-100' >Regisiter</button>
                    <p className='text-center my-2'><small>Already have an account? <Link to="/login" className='btn-link '>Login</Link></small></p>
                    <div className='line-break-container'>
                        <hr className='line-break' />
                        <p className='text-center'>or</p>
                        <hr className='line-break' />
                    </div>
                    <div>

                    </div>
                </form >
                <button className="btn btn-outline btn-accent w-full my-3"><FaGoogle className='mr-2 text-[20px]' /> Sign in with Google</button>

            </div>
        </div >
    );
};

export default Register;
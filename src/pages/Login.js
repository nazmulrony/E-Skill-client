import React, { useState } from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';


const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => setError(error.message));
        setError('');
    }

    return (
        <div className='bg-primary h-[90vh] px-2 '>
            <div className="bg-secondary text-light max-w-md mx-auto px-4 py-6 rounded-lg shadow-2xl">
                <h2 className='text-center text-3xl mb-2 font-semibold'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder='Enter your email' className='p-2 rounded-md text-secondary' required />
                    </div>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" className='p-2 rounded-md text-secondary' placeholder='Enter your password' required />
                    </div>
                    <button type="submit" className=' w-full bg-primary py-2 rounded-md mt-4 text-[20px] hover:bg-pine duration-100' >Login</button>
                    <p className='text-center my-2'><small>New to E-Skills? <Link to="/register" className='btn-link '>Create New Account</Link></small></p>
                    <div className='line-break-container'>
                        <hr className='line-break' />
                        <p className='text-center'>or</p>
                        <hr className='line-break' />
                    </div>
                    <div>

                    </div>
                </form >
                <button className="btn btn-outline btn-accent w-full my-3"><FaGoogle className='mr-2 text-[20px]' /> Continue with Google</button>

            </div>
        </div >
    );
};

export default Login;
import React, { useState } from 'react';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';


const Login = () => {
    const { loginUser, googleSignIn, githubSignIn } = useContext(AuthContext);
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
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => setError(error.message));

    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate('/');
            })
            .catch(error => {
                setError(error.message)
                console.log(error);
            });
    }
    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate('/');
            })
            .catch(error => {
                setError(error.message)
                console.log(error);
            });
    }

    return (
        <div className='bg-primary h-[90vh] px-2 '>
            <div className="bg-secondary text-light max-w-md mx-auto p-6 rounded-lg shadow-2xl">
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
                <div className='flex justify-between gap-6'>
                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-accent flex-1  my-3"><FaGoogle className='mr-2 text-[20px]' /> Google</button>
                    <button onClick={handleGithubSignIn} className="btn btn-outline btn-accent flex-1 my-3"><FaGithub className='mr-2 text-[20px]' />  GitHub</button>
                </div>

            </div>
        </div >
    );
};

export default Login;
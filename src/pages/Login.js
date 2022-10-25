import React, { } from 'react';
import { Link, } from 'react-router-dom';


const Login = () => {

    // const navigate = useNavigate();
    // const location = useLocation();
    // console.log(location);
    // const from = location.state?.from?.pathname || '/'
    // const handleSubmit = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     signIn(email, password)
    //         .then(result => {
    //             const user = result.user;
    //             form.reset();
    //             console.log(user);
    //             navigate(from, { replace: true });
    //         })
    //         .catch(error => console.error(error))
    // }
    return (
        <div className='bg-primary h-[90vh] px-2 '>
            <div className="bg-secondary text-light max-w-md mx-auto p-4 rounded-lg ">
                <h2 className='text-center text-3xl mb-2'>Login</h2>
                <form >
                    <div className="flex flex-col mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder='Enter your email' className='p-2 rounded-md text-secondary' required />
                    </div>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" className='p-2 rounded-md text-secondary' required />
                    </div>
                    <button type="submit" className=' w-full bg-primary py-2 rounded-md mt-4' >Login</button>
                    <p className='btn-link-container'><small>New to Ema John? <Link to="/signup" className='btn-link '>Create New Account</Link></small></p>
                    <div className='line-break-container'>
                        <hr className='line-break' />
                        <p>or</p>
                        <hr className='line-break' />
                    </div>
                    <div>

                    </div>
                </form >
                <button className='btn-google'><i className="fab fa-google fa-2x"></i> Continue with Google</button>

            </div>
        </div >
    );
};

export default Login;
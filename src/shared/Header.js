import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';


const Header: React.FC = () => {
    const { user, logOut } = useContext(AuthContext);

    const [navbar, setNavbar] = useState(false);

    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log('Signed Out');
                navigate('/signin');
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const navLinks = [
        <div
            className="flex flex-col w-full gap-5 font-semibold md:items-center md:flex-row "
            key={1}
        >
            <Link to={`/home`}>Home</Link>
            <Link to={`/courses`}>Courses</Link>
            <Link to={`/faq`}>FAQ</Link>
            <Link to={`/blog`}>Blog</Link>

            {
                user?.uid && <Link to={`/profile`}>
                    <div className="flex  items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-white/30">
                        {user?.photoURL ? (

                            <img
                                className="object-cover w-full h-full"
                                src={user.photoURL}
                                alt=""
                            />
                        ) : (
                            <FaUser />
                        )}
                    </div>
                </Link>
            }
            {user?.uid ? (
                <button onClick={handleSignOut} className="btn btn-xs text-gray-400 w-20 hover:text-light">Sign Out</button>
            ) : (
                <>
                    <Link to={`/login`}>Sign In</Link>
                    <Link to={`/register`}>Register</Link>
                </>
            )}
        </div>,
    ];

    return (
        <nav className="w-full text-white bg-primary">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link
                            to={`/`}
                            className="flex gap-2 text-4xl font-bold"
                        >
                            <img
                                className=" h-10"
                                src={logo}
                                alt=""
                            />
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2rounded-md "
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <FaTimes className="w-6 h-6  text-secondary" />
                                ) : (
                                    <FaBars className="w-6 h-6 text-secondary" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0  ${navbar ? 'block' : 'hidden'
                            }`}
                    >
                        {navLinks}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
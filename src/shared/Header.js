import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaSun, FaTimes, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { MdDarkMode } from 'react-icons/md';
import { Tooltip } from 'flowbite-react';


const Header: React.FC = () => {
    const { user, logOut } = useContext(AuthContext);

    const [navbar, setNavbar] = useState(false);
    const [toggle, setToggle] = useState(false)

    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log('Signed Out');
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
            <NavLink className={({ isActive }) => isActive ? 'text-secondary underline underline-offset-2' : undefined} to={`/home`}>Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-secondary underline underline-offset-2' : undefined} to={`/courses`}>Courses</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-secondary underline underline-offset-2' : undefined} to={`/faq`}>FAQ</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-secondary underline underline-offset-2' : undefined} to={`/blog`}>Blog</NavLink>

            {
                user?.uid && <NavLink to={`/profile`}>
                    <div className="flex  items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-white/30">
                        <Tooltip content={user?.displayName} placement="top">
                            {user?.photoURL ? (

                                <img
                                    className="object-cover w-full h-full"
                                    src={user.photoURL}
                                    alt=""
                                />
                            ) : (
                                <FaUser />
                            )}
                        </Tooltip>
                    </div>
                </NavLink>
            }
            {user?.uid ? (
                <button onClick={handleSignOut} className="btn btn-xs text-gray-400 w-20 hover:text-light">Sign Out</button>
            ) : (
                <>
                    <NavLink className={({ isActive }) => isActive ? 'text-secondary underline underline-offset-2' : undefined} to={`/login`}>Sign In</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-secondary underline underline-offset-2' : undefined} to={`/register`}>Register</NavLink>
                </>
            )}
            <button onClick={() => setToggle(!toggle)} className="h-10 w-10 rounded-full bg-secondary grid place-items-center">
                {
                    toggle ? <MdDarkMode /> : <FaSun />
                }
            </button>
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
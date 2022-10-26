import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-darkTeal text-center py-6 text-light'>
            <div className='flex justify-center items-center gap-4 my-2'>
                <button className='bg-teal-900 text-xl h-10 w-10 rounded-full grid place-items-center'> <FaGithub /> </button>
                <button className='bg-teal-900 text-xl h-10 w-10 rounded-full grid place-items-center'> <FaFacebook /> </button>
                <button className='bg-teal-900 text-xl h-10 w-10 rounded-full grid place-items-center'> <FaLinkedin /> </button>
                <button className='bg-teal-900 text-xl h-10 w-10 rounded-full grid place-items-center'> <FaInstagram /> </button>
            </div>

            <p className='font-thin'><small>Copyright ©2022. Nazmul Hasan Rony. All Rights Reserved.</small></p>
        </div>
    );
};

export default Footer;
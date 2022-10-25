import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://e-skill-server-site.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='text-light  ml-4 md:ml-10 flex flex-col gap-4 mt-4 md:mt-8'>
            <h3 className='text-3xl text-primary px-2 font-semibold'>Categories</h3>
            {
                categories.map(category => <p
                    key={category.id}
                    className=" text-[20px]"
                >
                    <Link to={`/category/${category.id}`} className="hover:bg-primary hover:text-secondary duration-100 p-2"> {category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default Sidebar;
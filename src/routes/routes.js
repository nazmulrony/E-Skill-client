import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import CourseCategory from "../pages/Courses/CourseCategory";
import Courses from "../pages/Courses/Courses";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />

            },
            {
                path: '/home',
                element: <Home />

            },
            {
                path: 'courses',
                element: <Courses />,
                loader: () => fetch('https://e-skill-server-site.vercel.app/courses')
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/category/:id',
                element: <CourseCategory />,
                loader: ({ params }) => fetch(`https://e-skill-server-site.vercel.app/category/${params.id}`)
            },
        ]
    }
])
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../pages/Blog";
import CheckOut from "../pages/CheckOut";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import CourseCategory from "../pages/Courses/CourseCategory";
import Courses from "../pages/Courses/Courses";
import Error404 from "../pages/Error404";
import FAQ from "../pages/FAQ";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

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
            {
                path: '/course/:id',
                element: <CourseDetails />,
                loader: ({ params }) => fetch(`https://e-skill-server-site.vercel.app/course/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://e-skill-server-site.vercel.app/course/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/FAQ',
                element: <FAQ />
            },
        ]

    },
    {
        path: '/*',
        element: <Error404 />
    }
])
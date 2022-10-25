import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
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
                path: 'courses',
                element: <Courses />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import About from "../About/About";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
])
export default router;
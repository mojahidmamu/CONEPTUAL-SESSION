import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import About from "../About/About";
import Login from "../Login.jsx/Login";
import PersonalDetails from "../PersonalDetails/PersonalDetails";

const router = createBrowserRouter([
    
    {
        path: '/', 
        element:  <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/details',
                element: <PersonalDetails></PersonalDetails>
            }
        ]
    }
])
export default router;
 
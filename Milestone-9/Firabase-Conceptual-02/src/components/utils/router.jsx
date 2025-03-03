import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home"; 
import AllTreatments from "../AllTreatments/AllTreatments";
import MyAppionments from "../MyAppoinments/MyAppionments";
import Profile from "../Profile/Profile";
import BookMark from "../Banner/BookMark";

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
                path: '/AllTreatments',
                element:  <AllTreatments></AllTreatments>
            },
            {
                path: '/myAppoinments',
                element: <MyAppionments></MyAppionments>
            }, 
            {
                path: '/profile', 
                element : <Profile></Profile>
            },
            {
                path: '/bookMark',
                element: <BookMark></BookMark>
            }
        ]
    },
])
export default router;
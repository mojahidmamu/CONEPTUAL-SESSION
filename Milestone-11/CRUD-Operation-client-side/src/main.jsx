import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import About from "./About.jsx";
import User from "./components/User.jsx";
import Update from "./components/Update.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/users",
    element: <User></User>,
    loader: () => fetch("http://localhost:5000/users"),
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: '/update/:id',
    element: <Update></Update>,
    loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`),
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

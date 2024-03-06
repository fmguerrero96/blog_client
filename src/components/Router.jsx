import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Login from "./LogIn";
import SignUp from "./SignUp";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/signup",
            element: <SignUp />
        },
    ])

    return <RouterProvider router={router} />;
};

export default Router
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "loginApp/LoginPage";

export const router = createBrowserRouter([
    { path: "/login", Component: LoginPage },
]);

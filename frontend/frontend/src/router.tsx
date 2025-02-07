import {createBrowserRouter} from "react-router-dom";
import LoginPage from "./LoginPage.tsx";
import CoursesList from "./CoursesList.tsx";
import CourseDetailsPage from "./CourseDetailsPage.tsx";

export const router = createBrowserRouter([{path: "/login", Component: LoginPage}, {path: "/", Component: CoursesList}, {path:"/courses/:courseId", Component: CourseDetailsPage}])
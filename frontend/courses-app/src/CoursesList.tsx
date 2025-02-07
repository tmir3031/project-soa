import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Course } from "./Types";
import { useAuth } from "loginApp/AuthContext";

const CoursesList = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    useEffect(() => {
        fetch("http://localhost/courses/courses")
            .then(res => res.json())
            .then(fetchedCourses => setCourses(fetchedCourses));
    }, []);
    const auth = useAuth();
    const navigate = useNavigate();

    return (
        <div>
            {auth.isAuthenticated ? "User logged in" : "Please log in before enrollment"}
            {!auth.isAuthenticated && (
                <button onClick={() => navigate("/login")}> Log in </button>
            )}
            {courses.map((course) => (
                <div key={course._id}>
                    {course.coursename + " " + course.teacher}
                    {auth.isAuthenticated && (
                        <button onClick={() => navigate(`/courses/${course._id}`)}> See details </button>
                    )}
                </div>
            ))}
        </div>
    );
};
export default CoursesList;



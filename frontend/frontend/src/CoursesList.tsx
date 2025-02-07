import {useEffect, useState} from "react";
import {useAuth} from "./AuthContext.tsx";
import {useNavigate} from "react-router-dom";
import {Course} from "./Types.tsx";

const CoursesList = ()=> {
    const [courses, setCourses] = useState<Course[]>([]);
    useEffect(()=> {
        fetch("http://localhost/courses/courses").then(res=> res.json()).then(fetchedCourses=> setCourses(fetchedCourses));
    }, []);
    const auth = useAuth();
    const navigate = useNavigate();

    return (
        <div className="courses-container">
            <p className="auth-message">
                {auth.isAuthenticated ? "User logged in" : "Please log in before enrollment"}
            </p>
            {!auth.isAuthenticated && (
                <button className="login-button" onClick={() => navigate("/login")}>Log in</button>
            )}
            <div className="courses-list">
                {courses.map((course, index) => (
                    <div className="course-card" key={index}>
                        <h3>{course.coursename}</h3>
                        <p>Instructor: {course.teacher}</p>
                        {auth.isAuthenticated && (
                            <button className="details-button" onClick={() => navigate(`/courses/${course._id}`)}>See details</button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

}

export default CoursesList;
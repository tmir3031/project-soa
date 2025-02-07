import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Course } from "./Types";
import { useAuth } from "loginApp/AuthContext";

const CourseDetailsPage = () => {
    const { courseId } = useParams();
    const [course, setCourse] = useState<Course | null>(null);
    useEffect(() => {
        fetch(`http://localhost/courses/courses/${courseId}`)
            .then(res => res.json())
            .then(fetchedCourse => setCourse(fetchedCourse));
    }, [courseId]);

    const auth = useAuth();

    const onEnrollCourse = () => {
        fetch(`http://localhost/enrollments/${courseId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: auth.token }),
        })
            .then(() => {
                alert("Enrollment purchased successfully!");
            })
            .catch((err) => {
                console.log(err);
                alert("Could not enroll!");
            });
    };

    if (!course) {
        return null;
    }
    return (
        <div>
            <div>
                {`${course.coursename} ${course.teacher} ${course.location} ${course.duration} ${course.startdate} ${course.price}`}
            </div>
            <div>
                <button onClick={onEnrollCourse}> Enroll Now </button>
            </div>
        </div>
    );
};
export default CourseDetailsPage;


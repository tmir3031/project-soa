import LoginPage from "loginApp/LoginPage";
import CoursesList from "coursesApp/CoursesList";

const App = () => {
    return (
        <div>
            <h1>Welcome to the Learning Platform</h1>
            <LoginPage />
            <CoursesList />
        </div>
    );
};

export default App;

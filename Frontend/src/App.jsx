import { Routes, Route, useMatch } from "react-router-dom";
import Home from "./pages/pageStudents/Home";
import CoursesList from "./pages/pageStudents/CoursesList";
import Coursedetails from "./pages/pageStudents/Coursedetails";
import MyEnrollments from "./pages/pageStudents/MyEnrollments";
import Player from "./pages/pageStudents/Player";
import Loading from "./components/students/Loading";
import Educator from "./pages/pageEducator/educator";
import Dashboard from "./pages/pageEducator/Dashboard";
import AddCourse from "./pages/pageEducator/AddCourse";
import MyCourses from "./pages/pageEducator/MyCourses";
import StudentsEnrolled from "./pages/pageEducator/StudentsEnrolled";
import Navbar from "./components/students/Navbar";
function App() {
  const isEducatorRoute = useMatch("/educator/*");
  return (
    <div className=" text-default min-h-screen bg-white">
      {!isEducatorRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<Coursedetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        {/* Educator route */}
        <Route path="/educator" element={<Educator />}>
          <Route path="educator" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="My-course" element={<MyCourses />} />
          <Route path="student-enrolled" element={<StudentsEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CourseNavigation from "./CourseNavigation";
import CourseHeader from "./CourseHeader";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { COURSES_URL } from "./Modules/client";

function Courses() {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});

  const findCourseById = async (courseId) => {
    const response = await axios.get(`${COURSES_URL}/${courseId}`);
    setCourse(response.data);
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div className="w-100">
      <CourseHeader courseId={courseId} course={course} />
      <hr class="mx-3" />
      <CourseNavigation courseId={courseId} course={course} />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0 pe-3"
          style={{ left: "260px", top: "90px" }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;

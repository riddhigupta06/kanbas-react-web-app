import { React, useState, useEffect } from "react";
import { Provider } from "react-redux";
import axios from "axios";
import store from "./store";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
  const [courses, setCourses] = useState([]);

  const URL = "http://localhost:4000/api/courses";

  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };

  useEffect(() => {
    findAllCourses();
  }, []);

  const [newCourse, setNewCourse] = useState({
    name: "",
    title: "",
    number: "",
    section: "",
    term: "",
    color: ""
  });

  const addNewCourse = async () => {
    const response = await axios.post(URL, newCourse);
    setCourses([response.data,...courses]);
    setNewCourse({
      name: "",
      title: "",
      number: "",
      section: "",
      term: "",
      color: ""
    })
  };

  const deleteCourse = async (courseId) => {
    const response = await axios.delete(`${URL}/${courseId}`);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    if (newCourse._id) {
      const response = await axios.put(`${URL}/${newCourse._id}`, newCourse);

      setCourses(
        courses.map((c) => {
          if (c._id === newCourse._id) {
            return newCourse;
          } else {
            return c;
          }
        })
      );
    }
  };
  
  return (
    <Provider store={store}>
      <div className="d-flex w-100 h-100">
        <KanbasNavigation />
        <div className="d-flex flex-grow-1 h-100">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={
              <Dashboard
                courses={courses}
                newCourse={newCourse}
                setNewCourse={setNewCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
              />
            } />
            <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
            <Route path="Calendar" element={<h1>Calendar</h1>} />
            <Route path="Inbox" element={<h1>Inbox</h1>} />
            <Route path="History" element={<h1>History</h1>} />
            <Route path="Studio" element={<h1>Studio</h1>} />
            <Route path="Commons" element={<h1>Commons</h1>} />
            <Route path="Help" element={<h1>Help</h1>} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;

import { React } from "react";
import { Link } from "react-router-dom";

function Dashboard({
  courses, 
  newCourse, 
  setNewCourse, 
  addNewCourse,
  deleteCourse, 
  updateCourse 
}) {

  return (
    <div className="py-2 mx-3">
      <h5 className="mb-3">Add a new Course</h5>
      <div className="mb-3">
        <label for="name" style={{fontWeight:500}}>Course Name:</label>
        <input id="name" value={newCourse.name} className="form-control mb-3"
              onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })} />
        <label for="title" style={{fontWeight:500}}>Course Title:</label>
        <input id="title" value={newCourse.title} className="form-control mb-3"
              onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })} />
        <label for="number" style={{fontWeight:500}}>Course Number:</label>
        <input id="number" value={newCourse.number} className="form-control mb-3"
              onChange={(e) => setNewCourse({ ...newCourse, number: e.target.value })} />
        <label for="section" style={{fontWeight:500}}>Course Section:</label>
        <input id="section" value={newCourse.section} className="form-control mb-3"
              onChange={(e) => setNewCourse({ ...newCourse, section: e.target.value })} />
        <label for="term" style={{fontWeight:500}}>Course Term:</label>
        <input id="term" value={newCourse.term} className="form-control mb-3"
              onChange={(e) => setNewCourse({ ...newCourse, term: e.target.value })} />
        <label for="color" style={{fontWeight:500}}>Course Color:</label>
        <input id="color" value={newCourse.color} className="form-control mb-3"
              onChange={(e) => setNewCourse({ ...newCourse, color: e.target.value })} />
      </div>
      <div className="mb-3">
        <button className="btn btn-primary" onClick={addNewCourse} >
          Add
        </button>
        <button className="btn btn-secondary ms-2" onClick={updateCourse} >
          Update
        </button>
      </div>

      <h4 className="py-2">Publised Courses ({courses.length})</h4>
      <hr class="my-1" style={{ width: "auto" }} />
      <div class="row flex-row flex-wrap row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        {courses.map((course) => (
          <div
            class="d-flex flex-fill"
            style={{
              padding: 15 + "px",
              minWidth: 300 + "px",
              maxWidth: 300 + "px",
            }}
          >
            <Link
              key={course._id}
              to={`/Kanbas/Courses/${course._id}`}
              className="list-group-item"
            >
              <div
                class="card"
                style={{
                  width: 270 + "px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                <div
                  class="card-img-top"
                  style={{ height: 150 + "px", backgroundColor: course.color }}
                ></div>
                <div class="card-body">
                  <h5
                    class="card-title"
                    style={{
                      overflowClipMargin: "padding-box",
                      overflow: "overlay",
                    }}
                  >
                    {course.number} <br/> {course.name}
                  </h5>
                  <p
                    class="card-text"
                    style={{
                      overflowClipMargin: "padding-box",
                      overflow: "hidden",
                    }}
                  >
                    {course.title}
                    <br />
                    {course.term}
                  </p>
                  <div className="d-flex flex-row">
                  <button className="btn btn-warning"
                    onClick={(event) => {
                      event.preventDefault();
                      setNewCourse(course);
                    }}>
                    Edit
                  </button>
                  <button className="btn btn-danger ms-2"
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}>
                    Delete
                  </button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;

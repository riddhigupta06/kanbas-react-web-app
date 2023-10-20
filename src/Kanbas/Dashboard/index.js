import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard() {
  const courses = db.courses;
  return (
    <div className="py-2 mx-3">
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

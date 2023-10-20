import db from "../../Database";
import { useParams, useLocation, Link } from "react-router-dom";
import { PiEyeglassesBold } from "react-icons/pi";
import "./index.css";

function CourseHeader() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  const navPaths = paths.slice(paths.findIndex((p) => p === courseId) + 1);
  const course = db.courses.find((course) => course._id === courseId);

  return (
    <div class="d-flex flex-row my-3 me-3 align-items-center">
      <nav className="ps-3 breadcrumbNav" aria-label="breadcrumb">
        <ol
          className="breadcrumb mb-0"
          style={{ fontWeight: 400, fontSize: 21 + "px" }}
        >
          <li className="breadcrumb-item">
            <Link
              key={0}
              to={`../Courses/${courseId}`}
              className={"link"}
              style={{
                fontSize: 21 + "px",
                textDecoration: "none",
                color: "#D41A2D",
              }}
            >
              {course.title}
            </Link>
          </li>
          {navPaths.map((path, index) => {
            let navAcvtive = "";
            if (index === navPaths.length - 1) {
              navAcvtive = "active";
            }

            return (
              <li
                className={`breadcrumb-item ${navAcvtive}`}
                aria-current="page"
              >
                {path}
              </li>
            );
          })}
        </ol>
      </nav>
      <div className="float-end ms-auto mb-0">
        <button className="btn btn-light btn-outline-secondary" style={{ color:'#000000' }}>
          <PiEyeglassesBold style={{ fontSize: 1.25 + "em", paddingRight: 5 + "px" }}/>
          Student View
        </button>
      </div>
    </div>
  );
}

export default CourseHeader;

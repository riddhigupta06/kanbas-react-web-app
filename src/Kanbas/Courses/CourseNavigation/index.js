import { Link, useParams, useLocation } from "react-router-dom";
import db from "../../Database";

function CourseNavigation() {
  const links = ["Home", "Modules", "Assignments", "Grades"];

  const { courseId } = useParams();
  const { pathname } = useLocation();

  const course = db.courses.find((course) => course._id === courseId);

  return (
    <div
      className="list-group m-2 p-2"
      style={{ width: 145, minHeight: 100 + "%", borderRadius: 0 }}
    >
      <p
        style={{
          fontSize: 12 + "px",
          overflowClipMargin: "padding-box",
          overflow: "hidden",
          fontStyle: "italic",
        }}
      >
        {course.term}
      </p>
      {links.map((item, index) => {
        const borderLeft = pathname.includes(item) ? "3px solid #000000" : 0;
        const colorActive = pathname.includes(item) ? "#000000" : "#D41A2D";
        return (
          <Link
            key={index}
            to={`${item}`}
            className={`list-group-item m-0 p-2`}
            style={{
              backgroundColor: "#FFFFFF",
              textAlign: "left",
              borderRight: 0,
              borderTop: 0,
              borderBottom: 0,
              borderLeft: borderLeft,
            }}
          >
            <p className="mb-1" style={{ color: colorActive, fontWeight: 500 }}>
              {item}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

export default CourseNavigation;

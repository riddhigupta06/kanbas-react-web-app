import { useParams } from "react-router-dom";
import { BsGearFill } from "react-icons/bs";
import { FaFileImport, FaFileExport, FaMagnifyingGlass } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import { BiSolidChevronDown } from "react-icons/bi";
import db from "../../Database";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId,
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId,
  );
  return (
    <div>
      <div class="d-flex flex-row justify-content-end align-items-center">
        <button type="button" class="m-1 btn btn-light btn-outline-secondary" style={{color:'#000000'}}>
            <FaFileImport style={{fontSize:1+'em', marginRight:5+'px' }} />
            Import
        </button>
        <div class="dropdown">
          <button class="btn btn-light btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'#000000'}}>
              <FaFileExport style={{fontSize:1+'em', marginRight:5+'px' }} />
              Export
          </button>
          <ul class="dropdown-menu">
              <li className="dropdown-item">Publish All</li>
          </ul>
        </div>
        <button type="button" class="m-1 btn btn-light btn-outline-secondary" style={{color:'#000000'}}>
            <BsGearFill style={{fontSize:1+'em'}} />
        </button>
      </div>

      <br />

      <div class="row">
        <div class="col">
          <label for="searchStudentName" class="col-form-label" style={{fontWeight:600}}>Student Names</label>
          <div class="input-group mb-2 d-flex flex-row">
              <span class="input-group-text bg-light" style={{borderRight:0}}>
                <FaMagnifyingGlass style={{ fontSize: 1+'em' }} />
              </span>
              <input class="form-control flex-grow-1" type="text" placeholder="Search Students" id="searchStudentName" style={{borderLeft:0, borderRight:0}} />
              <span class="input-group-text bg-light" style={{borderLeft:0}}>
                <BiSolidChevronDown style={{ fontSize:1+'em' }} />
              </span>
          </div>
        </div>
        <div class="col">
            <label for="searchStudentName" class="col-form-label" style={{fontWeight:600}}>Assignments Names</label>
            <div class="input-group mb-2 d-flex flex-row">
                <span class="input-group-text bg-light" style={{borderRight:0}}>
                  <FaMagnifyingGlass style={{ fontSize:1+'em' }} />
                </span>
                <input class="form-control flex-grow-1" type="text" placeholder="Search Assignments" id="searchAssignment" style={{borderLeft:0, borderRight:0}} />
                <span class="input-group-text bg-light" style={{borderLeft:0}}>
                  <BiSolidChevronDown style={{ fontSize:1+'em' }} />
                </span>
            </div>
        </div>
      </div>

      <div class="mb-3">
        <button class="btn btn-light btn-outline-secondary" style={{color:'#000000'}}>
          <FaFilter style={{ fontSize:1+'em' }} />
          Apply Filters
        </button>
      </div>

      <br />

      <div className="table-responsive table-striped text-center">
        <table className="table">
          <thead>
            <th className="text-start">Student Name</th>
            {assignments.map((assignment) => (
              <th>{assignment.title}</th>
            ))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find(
                (user) => user._id === enrollment.user,
              );
              return (
                <tr>
                  <td className="text-start">
                    {user.firstName} {user.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id,
                    );
                    return <td>{grade?.grade || "-"}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;

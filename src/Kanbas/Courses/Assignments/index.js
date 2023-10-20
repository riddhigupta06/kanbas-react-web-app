import React from "react";
import { Link, useParams } from "react-router-dom";
import { LuGripVertical, LuMoreVertical } from 'react-icons/lu';
import { AiFillCheckCircle, AiOutlinePlus } from 'react-icons/ai';
import { FaRegPenToSquare } from 'react-icons/fa6';
import db from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId,
  );

  return (
    <div>
      <div className="d-flex flex-wrap align-items-center">
      <div className="flex-grow-1">
        <input className="form-control w-25 d-inline m-0" type="text" placeholder="Search for Assignment" aria-label="default input example" />
      </div>
      <div className="float-end m-0">
        <button type="menuButton" className="m-1 btn btn-light btn-outline-secondary" style={{color:'#000000'}}>
          Group
        </button>
        <button type="menuButton" className="m-1 btn btn-danger">
          Module
        </button>
      </div>
      </div>
      <hr className="mt-2 mb-4 me-2" />
      <ul className="list-group" style={{ borderRadius:0, fontSize:16+'px' }}>
      <li className="list-group-item p-0 pb-5" style={{border:0}}>
        <div className="d-flex align-items-center ps-3" style={{ height:50+'px', border:"0.5px solid #CBCCCB", backgroundColor:'#D3D3D3' }}>
          <LuGripVertical style={{ fontSize:1+'em', color:'#000000', marginLeft:5+'px' }} />
          <p className="flex-grow-1" style={{ fontWeight:600, margin:0, paddingLeft:5+'px' }}>ASSIGNMENTS</p>
          <div className="me-2">
            <span className="m-0 me-3 p-2 bg-light rounded" style={{ color:'#000000', fontWeight:'normal' }}>
              40% of total
            </span>
            <AiOutlinePlus style={{ color:'#000000', fontSize:1+'em', marginRight:5+'px' }} />
            <LuMoreVertical style={{ color:'#000000', fontSize:1+'em' }} />
          </div>
        </div>
        <ul className="list-group" style={{ borderRadius:0, fontSize:16+'px' }}>
          {courseAssignments.map((assignment, index) => {
            return (
            <li key={index} className="list-group-item p-0" style={{ border:"0.5px solid #CBCCCB", borderTop:0, borderLeft:'5px solid green' }} >
              <div className="d-flex align-items-center ps-3" style={{ }}>
                <LuGripVertical style={{ fontSize:1+'em', color:'#000000' }} />
                <FaRegPenToSquare style={{ color:'green', fontSize:1+'em', marginLeft:10+'px' }} />
                <div className="w-100 d-flex" style={{ marginLeft: 5+'px' }}>
                  <p className="flex-grow-1" style={{ fontWeight:300, margin:0, fontSize:12+'px' }}>
                    <Link
                      key={assignment._id}
                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                      className="list-group-item"
                      style={{ textDecoration:'none', border:0 }}
                    >
                      <strong style={{ fontWeight:500, fontSize:16+'px' }}>{assignment.title}</strong>
                    
                      <br />
                      <strong style={{ fontWeight:500 }}>Due</strong> {assignment.due} | {assignment.points} pts
                    </Link>
                  </p>
                  <div className="me-2 align-self-center">
                    <AiFillCheckCircle style={{ color:'green', fontSize:1+'em', marginRight:5+'px' }} />
                    <LuMoreVertical style={{ color:'#000000', fontSize:1+'em' }} />
                  </div>
                </div>
              </div>
            </li>
            )
          })}
        </ul>
      </li>
    </ul>
    </div>
  );
}
export default Assignments;

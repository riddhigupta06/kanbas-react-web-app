import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { HiDotsVertical } from 'react-icons/hi';
import { AiFillCheckCircle } from 'react-icons/ai';
import db from "../../Database";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId,
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
  <div>
    <div class="d-flex flex-row justify-content-end align-items-center">
      <span class="m-0 me-3 p-2 rounded" style={{ color: 'green', fontWeight: 500 }}>
        <AiFillCheckCircle style={{ fontSize:20+'px', color:'green', paddingRight:5+'px' }} />
        Published
      </span>
      <button type="button" class="btn btn-light btn-outline-secondary">
        <HiDotsVertical style={{ fontSize:20+'px', color:'#000000' }} />
      </button>
    </div>
    <hr class="mt-2 mb-4" />
    <form>
      <div class="mb-3">
        <label for="assignmentName" class="form-label">
          Assignment Name
        </label>
        <input type="text" class="form-control" id="assignmentName" placeholder="Assignment Name" value={assignment.title}/>
      </div>
      <div class="mb-3">
        <textarea class="form-control" id="description" rows="3" placeholder="This is the assignment description.">{assignment.description}</textarea>
      </div>
      <div class="row g-3 align-items-top mb-3">
        <div class="col-2">
          <label for="points" class="col-form-label">Points</label>
        </div>
        <div class="col-auto w-25">
          <input type="number" id="points" class="form-control" value={assignment.points} />
        </div>
      </div>

      <div class="row g-3 align-items-top mb-3">
        <div class="col-2">
          <label for="assignmentGroup" class="col-form-label">Assignment group</label>
        </div>
        <div class="col-auto w-25">
          <select class="form-select" id="assignmentGroup">
            <option selected>ASSIGNMENTS</option>
          </select>
        </div>
      </div>

      <div class="row g-3 align-items-top mb-3">
        <div class="col-2">
          <label for="displayFormat" class="col-form-label">Display Grade as</label>
        </div>
        <div class="col-auto w-25">
          <select class="form-select" id="displayFormat">
            <option selected>Percentage</option>
          </select>
        </div>
      </div>

      <div class="row g-3 align-items-top mb-3">
        <div class="col-2">
          <label for="submissionType" class="col-form-label">Submission Type</label>
        </div>
        <div class="col-auto border p-3 w-25">
          <select class="form-select mb-2" id="submissionType">
            <option selected>Online</option>
          </select>

          <div class="">
            <label for="onlineEntryOptions" class="col-form-label" style={{fontWeight:600}}>
              Online Entry Options
            </label>
          </div>

          <div class="form-check my-3 mt-2">
            <input class="form-check-input" type="checkbox" value="" id="textEntry" checked/>
            <label class="form-check-label" for="textEntry">
              Text Entry
            </label>
          </div>
          <div class="form-check my-3">
            <input class="form-check-input" type="checkbox" value="" id="websiteUrl" checked />
            <label class="form-check-label" for="websiteUrl">
              Website URL
            </label>
          </div>
          <div class="form-check my-3">
            <input class="form-check-input" type="checkbox" value="" id="mediaRecordings" checked />
            <label class="form-check-label" for="mediaRecordings">
              Media Recordings
            </label>
          </div>
          <div class="form-check my-3">
            <input class="form-check-input" type="checkbox" value="" id="studentAnnotation"/>
            <label class="form-check-label" for="studentAnnotation">
              Student Annotation
            </label>
          </div>
          <div class="form-check my-3">
            <input class="form-check-input" type="checkbox" value="" id="fileUploads" checked/>
            <label class="form-check-label" for="fileUploads">
              File Uploads
            </label>
          </div>
          <div class="form-check my-3 ms-4" style={{fontSize:14+'px'}}>
            <input class="form-check-input" type="checkbox" value="" id="restrictFileUploadTypes"/>
            <label class="form-check-label" for="restrictFileUploadTypes">
              Restrict File Upload Types
            </label>
          </div>
        </div>
      </div>

      <div class="row g-3 align-items-top mb-3">
        <div class="col-2">
          <label for="submissionAttempts" class="col-form-label">
            Submission Attempts
            </label>
        </div>
        <div class="col-auto border px-3 py-2 w-25">
          <label for="submissionAttempts" class="col-form-label" style={{fontWeight:600}}>
            Allowed Attempts
          </label>

          <select class="form-select mb-2" id="submissionAttempts">
            <option selected>Unlimited</option>
          </select>
        </div>
      </div>

      <div class="row g-3 align-items-top mb-3">
        <div class="col-2">
          <label for="plagiarismReview" class="col-form-label">
            Plagiarism Review
            </label>
        </div>
        <div class="col-auto border p-3 w-25">
          <select class="form-select mb-2" id="plagiarismReview">
            <option selected>None</option>
          </select>
          <hr />
          <label for="showReportToStudents" class="col-form-label">
            Show report to sudents
          </label>
          <select class="form-select mb-2" id="showReportToStudents" disabled >
            <option selected>Immediately</option>
          </select>
        </div>
      </div>

      <div class="row g-3 align-items-top">
        <div class="col-2">
          <label for="groupAssignment" class="col-form-label">
            Group Assignment
          </label >
        </div>
        <div class="col-auto border p-3 w-25">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="groupAssignmentTrue"/>
            <label class="form-check-label" for="groupAssignmentTrue">
              This is a Group Assignment
            </label>
          </div>
        </div>

        <div class="row g-3 align-items-top">
          <div class="col-2">
            <label for="peerReviews" class="col-form-label">
              Peer Reviews
            </label>
          </div>
          <div class="col-auto border p-3 w-25">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="requirePeerReviews" />
              <label class="form-check-label" for="requirePeerReviews">
                Require Peer Reviews
              </label>
            </div>
          </div>
        </div>

        <div class="row g-3 align-items-top mb-3">
          <div class="col-2">
            <label for="assignTo" class="col-form-label">Assign</label>
          </div>
          <div class="col-auto border px-3 py-2">
            <label for="assignTo" class="col-form-label" style={{fontWeight:600}}>
              Assign To
            </label>
            <select class="form-select mb-2" id="assignTo">
              <option selected>Everyone</option>
            </select>

            <label for="dueDate" class="col-form-label" style={{fontWeight:600}}>
              Due
            </label>
            <div class="input-group mb-2 d-flex flex-row">
              <input class="form-date-input flex-grow-1" type="date" value={assignment.endDate} id="dueDate" />
            </div>

            <div class="row">
              <div class="col">
                <label for="availableFromDate" class="col-form-label" style={{fontWeight:600}}>
                  Available From
                </label>
                <div class="input-group mb-3">
                  <input class="form-date-input" type="date" value={assignment.startDate} id="availableFromDate" />
                </div>
              </div>
              <div class="col">
                <label for="availableUntilDate" class="col-form-label" style={{fontWeight:600}}>
                  Until
                </label>
                <div class="input-group mb-3">
                  <input
                    class="form-date-input"
                    type="date"
                    value={assignment.endDate}
                    id="availableUntilDate"
                  />
                </div>
              </div>
            </div>

            <button type="button" class="btn btn-light w-100">
              <i class="fa-solid fa-plus"></i>
              Add
            </button>
          </div>
        </div>
      </div>

      <hr class="mb-1 w-100" />
    </form>

    <div class="mb-3">
      <div class="form-check d-inline p-0">
        <input class="form-check-input ms-2" type="checkbox" value="" id="notifyUsers" />
        <label class="form-check-label ps-2" for="notifyUsers">
          Notify users that this content has changed
        </label>
      </div>
      <div class="float-end m-0">
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger me-2">
        Cancel
      </Link>
      <Link onClick={handleSave} to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-success me-2">
        Save
      </Link>
      </div>
    </div>
  </div>
  );
}

export default AssignmentEditor;

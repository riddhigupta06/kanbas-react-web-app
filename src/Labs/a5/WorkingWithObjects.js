import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
            id: 1,
            title: "NodeJS Assignment",
            description: "Create a NodeJS server with ExpressJS",
            due: "2021-10-10",
            completed: false,
            score: 0,
        });
    const [title, setTitle] = useState(assignment.title)
    const [score, setScore] = useState(assignment.score)
    const [completed, setCompleted] = useState(assignment.completed)

    const BASE_URL = process.env.REACT_APP_BASE
    const URL = `${BASE_URL}/a5/assignment`

    const fetchAssignment = async () => {
        const response = await axios.get(`${URL}`);
        setAssignment(response.data);
        setTitle(response.data.title)
        setScore(response.data.score)
        setCompleted(response.data.completed)
    };

    const updateTitle = async () => {
        const response = await axios.get(`${URL}/title/${assignment.title}`);
        setAssignment(response.data);
    };

    const updateScore = async () => {
        const response = await axios.get(`${URL}/score/${assignment.score}`);
        setAssignment(response.data);
    };

    const updateCompleted = async () => {
        const response = await axios.get(`${URL}/completed/${assignment.completed}`);
        setAssignment(response.data);
    };

    const fetchTitle = async () => {
        const response = await axios.get(`${URL}/title`);
        setTitle(response.data);
    };

    const fetchScore = async () => {
        const response = await axios.get(`${URL}/score`);
        setScore(response.data);
    };

    const fetchCompleted = async () => {
        const response = await axios.get(`${URL}/completed`);
        setCompleted(response.data);
    };

    useEffect(() => {
        fetchAssignment();
    }, []);
    

    return (
        <div>
            <h3>Working With Objects</h3>

            <h4>Retrieving objects</h4>
            <button onClick={fetchAssignment} className="btn btn-primary me-2">
                Get Assignment
            </button>

            <br />
            <br />

            <h4>Modifying Properties</h4>

            <div className="d-flex">
                <input 
                    onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
                    value={assignment.title}
                    className="form-control mb-2 w-75"
                    type="text" 
                />
                <button onClick={updateTitle} className="btn btn-primary mb-2">
                    Update Title to: {assignment.title}
                </button>
            </div>

            <div className="d-flex">
                <input 
                    onChange={(e) => setAssignment({ ...assignment, score: e.target.value })}
                    value={assignment.score}
                    className="form-control mb-2 w-75"
                    type="number"
                />
                <button onClick={updateScore} className="btn btn-primary mb-2">
                    Update Score to: {assignment.score}
                </button>
            </div>

            <div className="d-flex">
                <div className="w-75">
                    <input
                        type="checkbox" 
                        id="completed" 
                        name="completed" 
                        checked={assignment.completed}
                        onChange={(e) => setAssignment({...assignment, completed:e.target.checked})}
                    />
                    <label for="completed">Completed?</label>
                </div>
                <button onClick={updateCompleted} className="btn btn-primary mb-2">
                    Update Completed to: {assignment.completed.toString()}
                </button>
            </div>

            <h4>Retrieving Properties</h4>
            <div>
                Title: {title}
            </div>
            <button onClick={fetchTitle} className="btn btn-primary me-2">
                Get Title
            </button>

            <div>
                Score: {score}
            </div>
            <button onClick={fetchScore} className="btn btn-primary me-2">
                Get Score
            </button>

            <div>
                Completed: {completed.toString()}
            </div>
            <button onClick={fetchCompleted} className="btn btn-primary me-2">
                Get Completed
            </button>

        </div>
    );
}
export default WorkingWithObjects;
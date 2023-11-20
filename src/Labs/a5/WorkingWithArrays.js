import { React, useState, useEffect } from "react"
import axios from "axios";

function WorkingWithArrays() {
    const [errorMessage, setErrorMessage] = useState(undefined);
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: '2023-10-11',
        completed: false,
    });
    const [todos, setTodos] = useState([]);

    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
        setErrorMessage(undefined);
    };

    const deleteTodo = async (todo) => {
        try {
            const response = await axios.delete(`${API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id));
            setErrorMessage(undefined);
        } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
      
    };    
    
    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
        setErrorMessage(undefined);
    };

    const updateTodo = async () => {
        try {
            const response = await axios.put(`${API}/${todo.id}`, todo);
            setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
            setErrorMessage(undefined);
        } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };
    
    useEffect(() => {
        fetchTodos();
    }, []);

    const BASE_URL = process.env.REACT_APP_BASE
    const API = `${BASE_URL}/a5/todos`

    const getCompleted = async () => {
        const response = await axios.get(`${API}/?completed=true`);
        setTodos(response.data);
        setErrorMessage(undefined);
    };

    const getAll = async () => {
        const response = await axios.get(`${API}`);
        setTodos(response.data);
        setErrorMessage(undefined);
    };

    const fetchTodoById = async (id) => {
        try {
            const response = await axios.get(`${API}/${id}`);
            setTodo(response.data);
            setErrorMessage(undefined);
        } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };

    const updateTitle = async () => {
        try {
            const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
            setTodos(response.data);
            setErrorMessage(undefined);
        } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };

    const updateDescription = async () => {
        try {
            const response = await axios.get(`${API}/${todo.id}/description/${todo.description}`);
            setTodos(response.data);
            setErrorMessage(undefined);
        } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };

    const updateDue = async () => {
        try {
            const response = await axios.get(`${API}/${todo.id}/due/${todo.due}`);
            setTodos(response.data);
            setErrorMessage(undefined);
        } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };

    const updateCompleted = async () => {
        try {
            const response = await axios.get(`${API}/${todo.id}/completed/${todo.completed}`);
            setTodos(response.data);
            setErrorMessage(undefined);
        } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };
    
    return (
        <div className="w-75">
            <h3>Working with Arrays</h3>

            {errorMessage && (
                <div className="alert alert-danger mb-2 mt-2">
                    {errorMessage}
                </div>
            )}

            <div className="d-flex">
                <label for="todoID" className="w-50">ToDo ID</label>
                <input
                    className="form-control mb-2"
                    id='todoID'
                    value={todo.id}
                    onChange={(e) => setTodo({ ...todo, id: e.target.value })}
                    readOnly
                />
            </div>

            <div className="d-flex">
                <label for="todoTitle" className="w-50">ToDo Title</label>
                <input
                    value={todo.title}
                    onChange={(e) => setTodo({...todo, title: e.target.value })}
                    className="form-control mb-2"
                    type="text"
                    id='todoTitle'
                />
                <button onClick={updateTitle} className="btn btn-success ms-2 mb-2 col-4">
                    Update Title
                </button>
            </div>

            <div className="d-flex">
                <label for="todoDescription" className="w-50">ToDo Description</label>
                <input
                    value={todo.description ? todo.description : ''}
                    onChange={(e) => setTodo({...todo, description: e.target.value })}
                    className="form-control mb-2"
                    type="text"
                    id='todoDescription'
                />
                 <button onClick={updateDescription} className="btn btn-success ms-2 mb-2 col-4">
                    Update Description
                </button>
            </div>

            <div className="d-flex">
                <label for="todoDue" className="w-50">ToDo Due</label>
                <input
                    value={todo.due}
                    onChange={(e) => setTodo({...todo, due: e.target.value })}
                    className="form-control mb-2"
                    type="date"
                    id='todoDue'
                />
                <button onClick={updateDue} className="btn btn-success ms-2 mb-2 col-4">
                    Update Due
                </button>
            </div>

            <div className="d-flex">
                <label for='todoCompleted' className="w-50"> Todo Completed?</label>
                <div class="input-group mb-3">
                    <input
                        onChange={(e) => setTodo({...todo, completed: e.target.checked })}
                        className="checkbox mb-2"
                        type="checkbox"
                        id='todoCompleted'
                        checked={todo.completed}
                    />
                </div> 
                <button onClick={updateCompleted} className="btn btn-success ms-2 mb-2 col-4">
                    Update Completed
                </button>
            </div>
            
            <button onClick={postTodo} className="btn btn-primary mb-2 w-100">
                Post Todo
            </button>

            <button onClick={updateTodo} className="btn btn-primary mb-2 w-100">
                Update Todo
            </button>

            <div className="d-flex gap-2">
                <button onClick={getCompleted} className="btn btn-primary mb-2 w-100">
                    Get Completed Todos
                </button>

                <button onClick={getAll} className="btn btn-primary mb-2 w-100">
                    Get All Todos
                </button>
            </div>


            <ul className="list-group">
                {todos.map((todo) => (
                <li key={todo.id}
                    className="list-group-item">
                    <button
                        onClick={() => fetchTodoById(todo.id)}
                        className="btn btn-warning me-2 float-end" 
                    >
                        Edit
                    </button>

                    <button
                        onClick={() => deleteTodo(todo)}
                        className="btn btn-danger me-2 float-end" 
                    >
                        Delete
                    </button>
                    <input
                        checked={todo.completed}
                        type="checkbox" readOnly
                    />
                    {todo.title}
                    <p>{todo.description}</p>
                    <p>{todo.due}</p>
                </li>
                ))}
            </ul>
            <br/>
        </div>
    );
  }
export default WorkingWithArrays;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";

function Signup() {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({username: "", password: "" });

    const navigate = useNavigate();

    const signup = async () => {
        try {
            await client.signup(credentials);
            navigate("/project/account");
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    return (
        <div>
            <h1>Signup</h1>
            {error && <div>{error}</div>}
            <div className="form-control w-50 p-2">
                <div className="form-group mb-3">
                    <label for="username" style={{fontWeight:600}}>Username</label>
                    <input 
                        className="form-control"
                        id="username"
                        type="text"
                        value={credentials.username}
                        onChange={(e) => setCredentials({...credentials, username: e.target.value })}
                    />
                </div>
                <div className="form-group mb-3">
                    <label for="password" style={{fontWeight:600}}>Password</label>
                    <input 
                        className="form-control"
                        id="password"
                        type="password"
                        value={credentials.password}
                        onChange={(e) => setCredentials({...credentials,password: e.target.value })} 
                    />
                </div>
                
                <button className="btn btn-primary w-100" onClick={signup}>
                    Sign up
                </button>
            </div>
        </div>
    );
}

export default Signup;

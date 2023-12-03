import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";

function Signin() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();
    const signin = async () => {
        await client.signin(credentials);
        navigate("/project/account");
    };

    return (
        <div className="w-100">
            <h1>Sign in</h1>
            <div className="form-control w-50 p-2">
                <div className="form-group mb-3">
                    <label for="username" style={{fontWeight:600}}>Username</label>
                    <input 
                        className="form-control"
                        id="username"
                        type="text"
                        value={credentials.username} 
                        onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                    />
                </div>
                <div className="form-group mb-3">
                    <label for="password" style={{fontWeight:600}}>Password</label>
                    <input 
                        className="form-control"
                        id="password"
                        type="password"
                        value={credentials.password}
                        onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                    />
                </div>
                
                <button className="btn btn-primary w-100" onClick={signin}>
                    Sign in
                </button>
            </div>
        </div>
    );
}
export default Signin;

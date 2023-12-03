import { useState, useEffect } from "react";
import * as client from "./client";

function Account() {
    const [account, setAccount] = useState(null);

    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };
    
    const getDOB = () => {
        const date = new Date(account.dob)

        const formattedYear = date.getFullYear().toString()
        const month = date.getMonth() + 1
        const formattedMonth = month < 10 ? '0'+month.toString() : month.toString()
        const day = date.getDate() + 1
        const formattedDay = day < 10 ? '0'+day.toString() : day.toString()
        const formattedDate = formattedYear + '-' + formattedMonth + '-' + formattedDay

        return formattedDate
    }

    useEffect(() => {
        fetchAccount();
    }, []);

    return (
        <div className="w-100">
            <h1>Account</h1>
            {account && (
                <div className="w-50 form-control d-flex flex-column gap-2 p-2">
                    <div className="form-group">
                        <label for="firstName" style={{fontWeight:500}}>
                            First Name
                        </label>
                        <input 
                            id="firstName"
                            value={account.firstName} 
                            onChange={(e) => setAccount({ ...account, firstName: e.target.value })}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label for="lastName" style={{fontWeight:500}}>
                            Last Name
                        </label>
                        <input 
                            id="lastName"
                            value={account.lastName} 
                            onChange={(e) => setAccount({ ...account, lastName: e.target.value })}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label for="dob" style={{fontWeight:500}}>
                            Date of Birth
                        </label>
                        <input 
                            id="dob"
                            type="date"
                            value={getDOB()} 
                            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label for="email" style={{fontWeight:500}}>
                            Email
                        </label>
                        <input 
                            id="email"
                            type="email"
                            value={account.email} 
                            onChange={(e) => setAccount({ ...account, email: e.target.value })}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label for="password" style={{fontWeight:500}}>
                            Password
                        </label>
                        <input 
                            id="password"
                            type="password"
                            value={account.password}
                            onChange={(e) => setAccount({ ...account, password: e.target.value })}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label for="userRole" style={{fontWeight:500}}>
                            Role
                        </label>
                        <select id="userRole" className="form-control" onChange={(e) => setAccount({ ...account, role: e.target.value })}>
                            <option value="USER" selected={account.role === 'USER'}>User</option>
                            <option value="ADMIN" selected={account.role === 'ADMIN'}>Admin</option>
                            <option value="FACULTY" selected={account.role === 'FACULTY'}>Faculty</option>
                            <option value="STUDENT" selected={account.role === 'STUDENT'}>Student</option>
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Account;
import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import * as client from "./client";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Account() {
    const [account, setAccount] = useState(null);
    const toast = useToast();

    const navigate = useNavigate();

    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };

    const saveUser = async () => {
        await client.updateUser(account);
        toast({
            title: 'Account updated.',
            description: "We've updated your account.",
            status: 'success',
            duration: 5000,
            isClosable: true,
        })
    };

    const signout = async () => {
        await client.signout();
        navigate("/project/signin");
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
                        <label for="username" style={{fontWeight:500}}>
                            Username
                        </label>
                        <input 
                            disabled={true}
                            id="username"
                            value={account.username} 
                            className="form-control"
                        />
                    </div>
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
                    <button className="btn btn-primary w-100" onClick={saveUser}>
                        Save
                    </button>
                    <Link to="/project/admin/users">
                        <button className="btn btn-warning w-100">
                            All Users
                        </button>
                    </Link>
                    <button className="btn btn-danger w-100" onClick={signout}>
                        Sign out
                    </button>
                </div>
            )}
        </div>
    );
}

export default Account;
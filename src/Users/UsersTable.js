import React, { useState, useEffect } from "react";
import { BsTrash3Fill, BsFillCheckCircleFill, BsPencil, BsPlusCircleFill } from "react-icons/bs";
import * as client from "./client";
import { useToast } from "@chakra-ui/react";

function UsersTable() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({ username: "", firstName:"", lastName:"", email:"", password: "", role: "USER" });
    const toast = useToast();

    const createUser = async () => {
        try {
        const newUser = await client.createUser(user);
            setUsers([newUser, ...users]);
            setUser({ username: "", firstName:"", lastName:"", email:"", password: "", role: "USER" })
            toast({
                title: 'User created.',
                description: "We've created your new user.",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
        } catch (err) {
            console.log(err);
            toast({
                title: 'User creation failed.',
                description: "We couldn't create a new user.",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
    };

    const deleteUser = async (user) => {
        try {
            await client.deleteUser(user);
            setUsers(users.filter((u) => u._id !== user._id));
            toast({
                title: 'User deleted.',
                description: "We've deleted the user.",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
        } catch (err) {
            console.log(err);
            toast({
                title: 'User deletion failed.',
                description: "We couldn't delete this user.",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
    };

    const selectUser = async (user) => {
        try {
            const u = await client.findUserById(user._id);
            setUser(u);
        } catch (err) {
            console.log(err);
        }
    };

    const updateUser = async () => {
        try {
            const status = await client.updateUser(user);
            setUsers(users.map((u) => (u._id === user._id ? user : u)));
            setUser({ username: "", firstName:"", lastName:"", email:"", password: "", role: "USER" })
            toast({
                title: 'User updated.',
                description: "We've updated the user.",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
        } catch (err) {
            console.log(err);
            toast({
                title: 'User updation failed.',
                description: "We couldn't update this user.",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
    };
    
    const getDOB = () => {
        if (user.dob === "") {
            return ""
        }

        const date = new Date(user.dob)

        const formattedYear = date.getFullYear().toString()
        const month = date.getMonth() + 1
        const formattedMonth = month < 10 ? '0'+month.toString() : month.toString()
        const day = date.getDate() + 1
        const formattedDay = day < 10 ? '0'+day.toString() : day.toString()
        const formattedDate = formattedYear + '-' + formattedMonth + '-' + formattedDay

        return formattedDate
    }

    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };

    useEffect(() => { fetchUsers(); }, []);

    return (
        <div className="w-100">
            <h1>All Users</h1>

            <div className="my-3">
                <div className="w-100 form-control d-flex flex-column gap-2 p-2">
                    <div className="row">
                        <div className="col form-group">
                            <label for="firstName" style={{fontWeight:500}}>
                                First Name
                            </label>
                            <input 
                                id="firstName"
                                value={user.firstName} 
                                onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                                className="form-control"
                            />
                        </div>
                        <div className="col form-group">
                            <label for="lastName" style={{fontWeight:500}}>
                                Last Name
                            </label>
                            <input 
                                id="lastName"
                                value={user.lastName} 
                                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col">
                            <label for="dob" style={{fontWeight:500}}>
                                Date of Birth
                            </label>
                            <input 
                                id="dob"
                                type="date"
                                value={getDOB()} 
                                onChange={(e) => setUser({ ...user, dob: e.target.value })}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            <label for="email" style={{fontWeight:500}}>
                                Email
                            </label>
                            <input 
                                id="email"
                                type="email"
                                value={user.email} 
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col">
                            <label for="username" style={{fontWeight:500}}>
                                Username
                            </label>
                            <input 
                                id="username"
                                type="username"
                                value={user.username} 
                                onChange={(e) => setUser({ ...user, username: e.target.value })}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col">
                            <label for="password" style={{fontWeight:500}}>
                                Password
                            </label>
                            <input 
                                id="password"
                                type="password"
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col mb-3">
                            <label for="userRole" style={{fontWeight:500}}>
                                Role
                            </label>
                            <select id="userRole" className="form-control" onChange={(e) => setUser({ ...user, role: e.target.value })}>
                                <option value="USER" selected={user.role === 'USER'}>User</option>
                                <option value="ADMIN" selected={user.role === 'ADMIN'}>Admin</option>
                                <option value="FACULTY" selected={user.role === 'FACULTY'}>Faculty</option>
                                <option value="STUDENT" selected={user.role === 'STUDENT'}>Student</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col w-100">
                            <button className="btn btn-primary w-100" onClick={createUser}>
                                Create User
                            </button>
                        </div>
                        <div className="col w-100">
                            <button className="btn btn-success w-100" onClick={updateUser}>
                                Update User
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.username}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.role}</td>
                            <td>
                                <button className="btn btn-warning me-2">
                                    <BsPencil onClick={() => selectUser(user)} />
                                </button>
                                <button className="btn btn-danger me-2" onClick={() => deleteUser(user)}>
                                    <BsTrash3Fill />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default UsersTable;
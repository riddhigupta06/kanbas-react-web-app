import { Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import Nav from "../Nav";
import Signin from "../Users/Signin";
import Account from "../Users/Account";
import Home from "./Home";
import UsersTable from "../Users/UsersTable";
import Signup from "../Users/Signup";

function Project() {
    const { pathname } = useLocation();

    return (
        <div>
            <div>
                <Nav />
            </div>
            <div className="row p-3">
                <div className="col-2">
                    <div className="list-group">
                        <Link 
                            className={`list-group-item ${pathname.includes('home') ? 'list-group-item-primary' : ''}`}
                            to={`/project/home`}
                        >
                            Home
                        </Link>
                        <Link 
                            className={`list-group-item ${pathname.includes('account') ? 'list-group-item-primary' : ''}`}
                            to={`/project/account`}
                        >
                            Account
                        </Link>
                        <Link 
                            className={`list-group-item ${pathname.includes('signin') ? 'list-group-item-primary' : ''}`}
                            to={`/project/signin`}
                        >
                            Sign in
                        </Link>
                        <Link 
                            className={`list-group-item ${pathname.includes('signup') ? 'list-group-item-primary' : ''}`}
                            to={`/project/signup`}
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
                <div className="col-10">
                    <Routes>
                        <Route path="/" element={<Navigate to="/project/home" />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/admin/users" element={<UsersTable />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Project;
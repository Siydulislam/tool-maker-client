import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../Pages/Auth/firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    return (
        <div className="w-full navbar lg:px-20 bg-base-100">
            <div className="navbar-start">
                <div class="flex-1 px-2 mx-2 text-3xl font-bold"><Link to="/" >ToolMaker</Link></div>
            </div>
            <div className="navbar-end">
                <div className="flex-none hidden lg:block">
                    <ul className="menu menu-horizontal gap-x-1">
                        <li><NavLink to="/home" className="rounded-lg text-xl">Home</NavLink></li>
                        <li><NavLink to="/tools" className="rounded-lg text-xl">Tools</NavLink></li>
                        <li><NavLink to="/reviews" className="rounded-lg text-xl">Reviews</NavLink></li>
                        <li><NavLink to="/blogs" className="rounded-lg text-xl">Blogs</NavLink></li>
                        <li><NavLink to="/contact" className="rounded-lg text-xl">Contact</NavLink></li>
                        {
                            user && <li><NavLink to="/dashboard" className="rounded-lg text-xl">Dashboard</NavLink></li>
                        }
                        {user && <li><button className="rounded-lg text-xl">{user?.displayName}</button></li>}
                        <li>{user ? <button className="rounded-lg text-xl" onClick={logout} >Sign Out</button> : <NavLink to="/login" className="rounded-lg text-xl">Login</NavLink>}</li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/home" className="rounded-lg text-xl">Home</NavLink></li>
                        <li><NavLink to="/tools" className="rounded-lg text-xl">Tools</NavLink></li>
                        <li><NavLink to="/reviews" className="rounded-lg text-xl">Reviews</NavLink></li>
                        <li><NavLink to="/blogs" className="rounded-lg text-xl">Blogs</NavLink></li>
                        <li><NavLink to="/contact" className="rounded-lg text-xl">Contact</NavLink></li>
                        {
                            user && <li><NavLink to="/dashboard" className="rounded-lg text-xl">Dashboard</NavLink></li>
                        }
                        {user && <li><button className="rounded-lg text-xl">{user.displayName}</button></li>}
                        <li>{user ? <button className="rounded-lg text-xl" onClick={logout} >Sign Out</button> : <NavLink to="/login" className="rounded-lg text-xl">Login</NavLink>}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
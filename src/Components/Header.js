import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../Pages/Auth/firebase.init';

const Header = ({ children }) => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    }
    return (
        <div class="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                <div class="w-full navbar lg:px-20 bg-base-100">
                    <div class="flex-1 px-2 mx-2 text-3xl font-bold"><Link to="/" >ToolMaker</Link></div>
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal gap-x-1">
                            <li><NavLink to="/home" className="rounded-lg text-xl">Home</NavLink></li>
                            <li><NavLink to="/tools" className="rounded-lg text-xl">Tools</NavLink></li>
                            <li><NavLink to="/reviews" className="rounded-lg text-xl">Reviews</NavLink></li>
                            <li><NavLink to="/blogs" className="rounded-lg text-xl">Blogs</NavLink></li>
                            <li><NavLink to="/contact" className="rounded-lg text-xl">Contact</NavLink></li>
                            <li>{user ? <button onClick={logout} className="rounded-lg text-xl">Logout</button> : <NavLink to="/login" className="rounded-lg text-xl">Login</NavLink>}</li>
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 gap-y-1">
                    <li><NavLink to="/home" className="rounded-lg text-xl">Home</NavLink></li>
                    <li><NavLink to="/tools" className="rounded-lg text-xl">Tools</NavLink></li>
                    <li><NavLink to="/reviews" className="rounded-lg text-xl">Reviews</NavLink></li>
                    <li><NavLink to="/blogs" className="rounded-lg text-xl">Blogs</NavLink></li>
                    <li><NavLink to="/contact" className="rounded-lg text-xl">Contact</NavLink></li>
                    <li>{user ? <button onClick={logout} className="rounded-lg text-xl">Logout</button> : <NavLink to="/login" className="rounded-lg text-xl">Login</NavLink>}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
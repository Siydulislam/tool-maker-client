import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import auth from '../Auth/firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content gap-y-1">
                    {(user && !admin) && <li><Link to="/dashboard" className="rounded-lg text-xl">My Orders</Link></li>}
                    {(user && !admin) && <li><Link to="/dashboard/review" className="rounded-lg text-xl">Add Review</Link></li>}
                    {(user || admin) && <li><Link to="/dashboard/profile" className="rounded-lg text-xl">My Profile</Link></li>}
                    {(admin && user) && <li><Link to="/dashboard/manageOrders" className="rounded-lg text-xl">Manage Orders</Link></li>}
                    {(admin && user) && <li><Link to="/dashboard/addProduct" className="rounded-lg text-xl">Add Product</Link></li>}
                    {(admin && user) && <li><Link to="/dashboard/manageProducts" className="rounded-lg text-xl">Manage Products</Link></li>}
                    {(admin && user) && <li><Link to="/dashboard/makeAdmin" className="rounded-lg text-xl">Make Admin</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
import React from 'react';
import AddAProduct from './AddAProduct';
import AddReview from './AddReview';
import MakeAdmin from './MakeAdmin';
import ManageAllOrders from './ManageAllOrders';
import ManageProducts from './ManageProducts';
import ManageUsers from './ManageUsers';
import MyOrders from './MyOrders';
import MyProfile from './MyProfile';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard Page</h1>
            <MyOrders />
            <AddReview />
            <MyProfile />
            <ManageAllOrders />
            <ManageUsers />
            <AddAProduct />
            <ManageProducts />
            <MakeAdmin />
        </div>
    );
};

export default Dashboard;
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";

const Dashboard = () => {
    return (
        <Sidebar>
            <Outlet />
        </Sidebar>
    );
};

export default Dashboard;
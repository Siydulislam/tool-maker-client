import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import auth from '../Auth/firebase.init';
import AllOrders from './AllOrders';
import DeleteAllOrdersModal from './DeleteAllOrdersModal';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [isReload, setIsReload] = useState(false);
    const [deletingAllOrder, setDeletingAllOrder] = useState(null);
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const navigate = useNavigate();

    useEffect(() => {
        if (admin) {
            fetch(`https://aqueous-sierra-01864.herokuapp.com/allOrder`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setAllOrders(data);
                });
        }
    }, [admin, navigate, isReload])
    return (
        <div>
            <h1 className="rounded-lg text-xl">Total Orders: {allOrders.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product's Name</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.map((allOrder, index) => <AllOrders
                                key={allOrder._id}
                                allOrder={allOrder}
                                index={index}
                                setIsReload={setIsReload}
                                setDeletingAllOrder={setDeletingAllOrder}
                            ></AllOrders>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingAllOrder && <DeleteAllOrdersModal
                deletingAllOrder={deletingAllOrder}
                setIsReload={setIsReload}
                setDeletingAllOrder={setDeletingAllOrder}
            ></DeleteAllOrdersModal>}
        </div>
    );
};

export default ManageAllOrders;
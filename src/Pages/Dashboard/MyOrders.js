import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../Auth/firebase.init';
import Orders from './Orders';
import DeleteOrderModal from './DeleteOrderModal';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isReload, setIsReload] = useState(false);
    const [deletingOrder, setDeletingOrder] = useState(null);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data);
                });
        }
    }, [user, navigate, isReload]);
    return (
        <div>
            <h1>My Orders: {orders.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Name</th>
                            <th>Product's Name</th>
                            <th>Quantity</th>
                            <th>Action</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <Orders
                                key={order._id}
                                order={order}
                                index={index}
                                setIsReload={setIsReload}
                                setDeletingOrder={setDeletingOrder}
                            ></Orders>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {deletingOrder && <DeleteOrderModal
                deletingOrder={deletingOrder}
                setIsReload={setIsReload}
                setDeletingOrder={setDeletingOrder}
            ></DeleteOrderModal>}
        </div>
    );
};

export default MyOrders;
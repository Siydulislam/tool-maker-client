import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import auth from '../Auth/firebase.init';
import DeleteConfirmModal from './DeleteConfirmModal';
import Products from './Products';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [isReload, setIsReload] = useState(false);
    const [deletingProduct, setDeletingProduct] = useState(null);
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const navigate = useNavigate();

    useEffect(() => {
        if (admin) {
            fetch(`http://localhost:5000/tool`, {
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
                    setProducts(data);
                });
        }
    }, [admin, navigate, isReload])
    return (
        <div>
            <h1>Total Products: {products.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <Products
                                key={product._key}
                                product={product}
                                index={index}
                                setIsReload={setIsReload}
                                setDeletingProduct={setDeletingProduct}
                            ></Products>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingProduct && <DeleteConfirmModal
                deletingProduct={deletingProduct}
                setIsReload={setIsReload}
                setDeletingProduct={setDeletingProduct}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageProducts;
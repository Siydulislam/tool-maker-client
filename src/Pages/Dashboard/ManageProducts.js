import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import auth from '../Auth/firebase.init';
import DeleteProductModal from './DeleteProductModal';
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
            fetch(`https://aqueous-sierra-01864.herokuapp.com/tool`, {
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
            <h1 className="rounded-lg text-xl">Total Products: {products.length}</h1>
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
                                key={product._id}
                                product={product}
                                index={index}
                                setIsReload={setIsReload}
                                setDeletingProduct={setDeletingProduct}
                            ></Products>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingProduct && <DeleteProductModal
                deletingProduct={deletingProduct}
                setIsReload={setIsReload}
                setDeletingProduct={setDeletingProduct}
            ></DeleteProductModal>}
        </div>
    );
};

export default ManageProducts;
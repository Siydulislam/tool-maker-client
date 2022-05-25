import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../Auth/firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { purchaseItemId } = useParams();
    console.log(purchaseItemId)
    const [purchaseItem, setPurchaseItem] = useState({});
    console.log(purchaseItem)

    const { _id, name, img, description, quantity, price } = purchaseItem;

    useEffect(() => {
        fetch(`http://localhost:5000/tool/${purchaseItemId}`)
            .then(res => res.json())
            .then(data => setPurchaseItem(data))
    }, [purchaseItemId]);

    return (
        <>
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 my-12'>
                <div>
                    <h2 className="text-center text-xl font-bold text-primary underline">Tools Details</h2>
                    <div class="card card-compact w-100 bg-base-100 m-8">
                        <figure><img src={img} alt="Shoes" /></figure>
                        <div class="card-body mx-auto">
                            <h2 class="card-title">{name}</h2>
                            <p className="text-primary">{description}</p>
                            <p className="font-bold text-primary">Available quantity: {quantity}</p>
                            <p className="font-bold text-primary">Price(price per unit): {price}</p>
                            <p className="font-bold text-secondary">Minimum Order Quantity: </p>
                            <div class="mt-6">
                                <input type="text" placeholder="Add Order Quantity" class="input input-bordered" />
                                <button class="btn btn-primary mx-3">Add</button>
                            </div>
                            <div class="mt-3">
                                <input type="text" placeholder="Remove Order Quantity" class="input input-bordered" />
                                <button class="btn btn-primary mx-3">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-center text-xl font-bold text-primary underline">Purchase Details</h2>
                    <div class="card w-full max-w-sm bg-base-100 m-8 border mx-auto">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" disabled value={user?.displayName} class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Email" disabled value={user?.email} class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Product's ID</span>
                                </label>
                                <input type="text" placeholder="Products's ID" disabled value={_id} class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Product's Name</span>
                                </label>
                                <input type="text" placeholder="Products's Name" disabled value={name} class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Order's Quantity</span>
                                </label>
                                <input type="text" placeholder="Order's Quantity" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Address</span>
                                </label>
                                <input type="text" placeholder="Address" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Phone Number</span>
                                </label>
                                <input type="text" placeholder="Phone Number" class="input input-bordered" />
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Place the Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Purchase;
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Auth/firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="mx-auto">
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-20 my-12'>
                <div>
                    <h2 className="text-center text-xl font-bold text-primary underline">Tools Details</h2>
                    <div class="card card-compact w-100 bg-base-100 m-8">
                        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p className="text-primary">If a dog chews shoes whose shoes does he choose?</p>
                            <p className="font-bold text-primary">Available quantity: </p>
                            <p className="font-bold text-primary">Price(price per unit): </p>
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
                    <div class="card w-full max-w-sm bg-base-100 m-8 border">
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
                                    <span class="label-text">Product's Name</span>
                                </label>
                                <input type="text" placeholder="Products's Name" class="input input-bordered" />
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
        </div>
    );
};

export default Purchase;
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../Auth/firebase.init';

const Purchase = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { purchaseItemId } = useParams();
    const [purchaseItem, setPurchaseItem] = useState({});

    const { name, img, description, quantity, minQuantity, price } = purchaseItem;

    useEffect(() => {
        fetch(`http://localhost:5000/tool/${purchaseItemId}`)
            .then(res => res.json())
            .then(data => setPurchaseItem(data))
    }, [purchaseItemId]);

    const handlePlaceOrder = (data, event) => {
        // console.log(data, event)
        // const selectedQuantity = event.target.quantity.value;
        // const totalPrice = selectedQuantity * price;
        // console.log(totalPrice)
        const order = {
            name: data.name,
            email: data.email,
            pdName: data.pdName,
            // unitPrice: data.unitPrice,
            quantity: data.quantity,
            // totalPrice: data.unitPrice * data.quantity,
            address: data.address,
            phone: data.phone
        }

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("Order Placed Successfully!", { id: "order" })
                    reset();
                    navigate("/tools");
                } else {
                    toast.error("Something went wrong!")
                }
            })
    }

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
                            <p className="font-bold text-primary">Price(price per unit): ${price}</p>
                            <p className="font-bold text-secondary">Minimum Order Quantity: {minQuantity}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-center text-xl font-bold text-primary underline">Purchase Details</h2>
                    <div class="card w-full max-w-sm bg-base-100 m-8 border mx-auto">
                        <div class="card-body">
                            <form onSubmit={handleSubmit(handlePlaceOrder)}>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" value={user?.displayName} class="input input-bordered"
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'Name is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                    </label>
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="Email" value={user?.email} class="input input-bordered"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    </label>
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Product's Name</span>
                                    </label>
                                    <input type="text" placeholder="Products's Name" value={name} class="input input-bordered"
                                        {...register("pdName", {
                                            required: {
                                                value: true,
                                                message: "Product's Name is Required"
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.pdName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.pdName.message}</span>}
                                    </label>
                                </div>
                                {/* <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Per Unit Price</span>
                                    </label>
                                    <input type="text" placeholder="Per Unit Price" value={price} class="input input-bordered"
                                        {...register("unitPrice", {
                                            required: {
                                                value: true,
                                                message: "Per Unit Price is Required"
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.unitPrice?.type === 'required' && <span className="label-text-alt text-red-500">{errors.unitPrice.message}</span>}
                                    </label>
                                </div> */}
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Order's Quantity</span>
                                    </label>
                                    <input type="number" name="selectedQuantity" placeholder="Order's Quantity" class="input input-bordered"
                                        {...register("quantity", {
                                            required: {
                                                value: true,
                                                message: 'Quantity is Required'
                                            },
                                            min: {
                                                value: `${minQuantity}`,
                                                message: `Min. Order must be starting from ${minQuantity}`
                                            },
                                            max: {
                                                value: `${quantity}`,
                                                message: `Max. Order must not be over than ${quantity}`
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {(errors.quantity?.type === 'required' || errors.quantity?.type === 'min' || errors.quantity?.type === 'max') && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                    </label>
                                </div>
                                {/* <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Total Price</span>
                                    </label>
                                    <input type="text" placeholder="Total Price" name="address" class="input input-bordered"
                                        {...register("totalPrice", {
                                            required: {
                                                value: true,
                                                message: 'Total Price is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.totalPrice?.type === 'required' && <span className="label-text-alt text-red-500">{errors.totalPrice.message}</span>}
                                    </label>
                                </div> */}
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Address</span>
                                    </label>
                                    <input type="text" placeholder="Address" name="address" class="input input-bordered"
                                        {...register("address", {
                                            required: {
                                                value: true,
                                                message: 'Address is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                                    </label>
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Phone Number</span>
                                    </label>
                                    <input type="number" placeholder="Phone Number" name="phone" class="input input-bordered"
                                        {...register("phone", {
                                            required: {
                                                value: true,
                                                message: 'Phone Number is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                    </label>
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">Place the Order</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Purchase;
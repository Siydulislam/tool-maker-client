import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import Loading from '../../Components/Loading';

const stripePromise = loadStripe('pk_test_51L49D3EWkTZQpEcnXoCP6XcXH5qbjJrZNeSEZio0QvGqxJH9QCAwhpT7q4Q0KA1LH725xYNCFaG2N10XsX1eECss00d3b46DUd');

const Payment = () => {
    const [order, setOrder] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setOrder(data)
                setIsLoading(false)
            })
    }, [id]);

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-16 mx-auto">
                <div class="card-body mx-auto">
                    <p className="text-success font-bold">Hello, {order.name}</p>
                    <h2 class="card-title">Please pay for {order.quantity} pieces of {order.pdName}</h2>
                    <p>Please pay: ${order.totalPrice}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 mx-auto">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
import React from 'react';
import { Link } from 'react-router-dom';

const Orders = ({ order, index, setDeletingOrder }) => {
    const { _id, name, pdName, quantity, totalPrice, paid, transactionId } = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{pdName}</td>
            <td>{quantity}</td>
            <td>{totalPrice}</td>
            <td>
                <label onClick={() => setDeletingOrder(order)} for="delete-confirm-modal" disabled={paid} class="btn btn-xs btn-error">Delete</label>
            </td>
            <td>
                {(totalPrice && !paid) && <Link to={`/dashboard/payment/${_id}`}><label class="btn btn-xs btn-primary">Pay</label></Link>}
                {(totalPrice && paid) && <div>
                    <p><span className='text-success'>Paid</span></p>
                    <p>Transaction id: <span className='text-success'>{transactionId}</span></p>
                </div>}
            </td>
        </tr>
    );
};

export default Orders;
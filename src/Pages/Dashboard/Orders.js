import React from 'react';

const Orders = ({ order, index, setDeletingOrder }) => {
    const { name, pdName, quantity } = order;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{pdName}</td>
            <td>{quantity}</td>
            <td>
                <label onClick={() => setDeletingOrder(order)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            </td>
            <td>
                <label for="delete-confirm-modal" class="btn btn-xs btn-primary">Pay</label>
            </td>
        </tr>
    );
};

export default Orders;
import React from 'react';

const AllOrders = ({ allOrder, index }) => {
    const { name, email, pdName, quantity } = allOrder;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{pdName}</td>
            <td>{quantity}</td>
            <td>
                <label for="delete-confirm-modal" class="btn btn-xs btn-error">Pending</label>
            </td>
            <td>
                <label for="delete-confirm-modal" class="btn btn-xs btn-primary">Unpaid</label>
            </td>
            <td>
                <label for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default AllOrders;
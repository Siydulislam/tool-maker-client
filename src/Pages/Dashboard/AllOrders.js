import React, { useState } from 'react';

const AllOrders = ({ allOrder, index, setDeletingAllOrder }) => {
    const [updateStatus, setUpdateStatus] = useState("Pending");
    const { name, email, pdName, quantity, paid } = allOrder;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{pdName}</td>
            <td>{quantity}</td>
            <td>
                {!paid && <label class="btn btn-xs btn-error">{updateStatus}</label>}
                {paid && <label class="btn btn-xs btn-error" onClick={() => setUpdateStatus("Shipped")}>{updateStatus}</label>}
            </td>
            <td>
                {!paid && <label class="btn btn-xs btn-primary">Unpaid</label>}
                {paid && <label class="btn btn-xs btn-primary">Paid</label>}
            </td>
            <td>
                {!paid ? <label for="delete-confirm-modal" onClick={() => setDeletingAllOrder(allOrder)} class="btn btn-xs btn-error">Delete</label> : ''}
            </td>
        </tr>
    );
};

export default AllOrders;
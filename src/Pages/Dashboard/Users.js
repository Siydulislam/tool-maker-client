import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Users = ({ user }) => {
    const { email, role } = user;
    const [isReloading, setIsReloading] = useState(false);
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Failed to make an admin")
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Successfully made an admin");
                    setIsReloading(!isReloading);
                }
            })
    }
    return (
        <tr>
            <th></th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default Users;
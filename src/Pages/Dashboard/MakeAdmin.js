import React, { useEffect, useState } from 'react';
import Users from './Users';

const MakeAdmin = () => {
    const [users, setUsers] = useState([]);
    const [isReload, setIsReload] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/user', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [isReload]);

    return (
        <div>
            <h1 className="rounded-lg text-xl">Total users: {users.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Name</th>
                            <th>Make Admin</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <Users
                                index={index}
                                key={user._id}
                                user={user}
                                setIsReload={setIsReload}
                            ></Users>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;
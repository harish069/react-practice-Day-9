import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios("https://reqres.in/api/users").then((res) => {
            console.log(res.data);
            setUsers(res.data.data);
       })
    },[])
    return (
        <div>
            <ul>
                {users.map((e) => (
                    <li key={e.id}><Link to={`/users/${e.id}`}>{e.first_name} {e.last_name}</Link></li>
                ))}
            </ul>
        </div>
    )
}

export default Users

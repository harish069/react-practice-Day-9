import React from 'react'
import { useParams } from 'react-router';
import { useEffect, useState } from "react";
import axios from 'axios';

function UserDetails() {
    const { id } = useParams();
    const [user, setUser] = useState({})
    //console.log(param);
    useEffect(() => {
        axios(`https://reqres.in/api/users/${id}`).then((data) => {
            setUser(data.data.data);
        })
    })
    return (
        <div>
            <h1>Hello</h1>
            <img src={`${user.avatar}`} alt="" />
            <br />
            {user.first_name}
            <br />
            {user.email}
        </div>
    )
}

export default UserDetails

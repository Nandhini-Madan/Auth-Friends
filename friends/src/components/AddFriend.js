import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import getData from "./FriendsList";
const AddFriend = (props) => {

    const [friendForm, setFriendForm] = useState({
        id: Date.now(),
        name: "",
        age: "",
        email: ""
    })

    const changeHandler = (e) => {
        e.persist();
        console.log(e.target.name, e.target.value)
        setFriendForm({
            ...friendForm,
            [e.target.name]: [e.target.value]
        });
    }

    const pushFriend = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/friends", friendForm)
            .then(response => 
                {
               //    props.getData()
               props.setFriends(response.data);
                    console.log(response.data)
                }
               

                )
            .catch(error => console.log(error))
    };

    return (
        <form onSubmit={pushFriend}>
            <label>
                name
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="insert name"
                    onChange={changeHandler}
                    value={friendForm.name}
                />
            </label>
            
            <label>
                <input
                    type="text"
                    id="age"
                    name="age"
                    placeholder="insert age"
                    onChange={changeHandler}
                    value={friendForm.age}
                />
            </label>
            <label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="insert email"
                    onChange={changeHandler}
                    value={friendForm.email}
                />
            </label>
            <button>Add Friend</button>
        </form>
    )
}

export default AddFriend;

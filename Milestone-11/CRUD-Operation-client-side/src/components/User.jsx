import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const User = () => {
  const loadedUsers = useLoaderData();

  const [users, setUsers] = useState(loadedUsers)

  const handleDelete = (_id) => {
    console.log("user:", _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
       
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.deletedCount > 0){
            alert('data delete successfully')
            const remaining = users.filter( user => user._id !== _id);
            setUsers(remaining)
        } 
      });
  }; 

  return (
    <div>
      <h1>Total users: {loadedUsers.length} </h1>
      <div>
        {loadedUsers.map((user) => (
          <p key={user._id}>
            Name: {user.name} : Email: {user.email} ; ID: {user._id} ,---
            <Link to={`/update/${user._id}`}>
              <button className="btn btn-outline">Update</button>
            </Link>
            <button onClick={() => handleDelete(user._id)}
              className="btn btn-outline" > X </button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default User;

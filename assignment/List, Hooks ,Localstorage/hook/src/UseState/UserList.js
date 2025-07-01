import React, { useEffect, useState } from 'react'

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error =>console.error('Error fetching data:', error));
    },[]);
  return (
    <div style={{ padding: '20px' }}>
        <h2>USer list</h2>
        {users.length === 0 ? (
            <p>Loading users...</p>
        ) : (
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> - {user.email}
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default UserList

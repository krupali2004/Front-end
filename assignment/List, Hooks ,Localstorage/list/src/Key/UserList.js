import React from 'react'

function UserList() {
    const users = [
        {id:1, name:'Krupali Yadav', age:'22'},
        {id:2, name:'Rashmika Yadav', age:'27'},
        {id:3, name:'Mahek Yadav', age:'18'},
        {id:4, name:'Aakansha Gupta', age:'21'},
        {id:5, name:'Shrasti Shakya', age:'26'}
    ]
  return (
    <div>
        <h2>USer List</h2>
        <ul>
            {users.map((user)=>(
                <li key={user.id}>
                    {user.id} / name: {user.name} / age: {user.age}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default UserList

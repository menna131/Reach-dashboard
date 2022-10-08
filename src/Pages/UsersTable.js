import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersTable = ({data}) => {
//  const [users, setUsers] = useState([]);
//  useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/users')
//         .then(res => {console.log(res); setUsers(res.data)})
//         .catch(err => {console.log(err)})
//  }, []);
//  const [query, setQuery] = useState("");
//  console.log(query);
  return (
    <div></div>
    // <table>
    //   <thead>
    //     <tr>
    //         <th>Name</th>
    //         <th>Email</th>
    //         <th>Status</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {
    //         users.map((user) => (
    //             <tr key={user.id}>
    //                 <td>{user.name}</td>
    //                 <td>{user.email}</td>
    //             </tr>
    //         ))
    //     }
    //   </tbody>
    // </table>
  )
}

export default UsersTable

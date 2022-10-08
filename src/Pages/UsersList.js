import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UsersTable from './UsersTable';
import users from './DataFetching';
import DataFetching from './DataFetching';
import AddUserModel from '../Components/Modal';
// import DataFetching from './DataFetching';

const UsersList = () => {
  const [users, setUsers] = useState([]);
 useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {console.log(res); setUsers(res.data)})
        .catch(err => {console.log(err)})
 }, []);
 const [query, setQuery] = useState("");

//  const search = (data) => {
//   console.log(typeof data);
//   // return data.filter((item) => item.name.toLowerCase().includes(query));
//  };
//  console.log(item.name);
  return (
    <div>
      <AddUserModel />
      <input  type="text" placeholder='search' className='search' 
      onChange={(e) => setQuery(e.target.value)}/>
        <div>
        <table>
      <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {
          users.filter((user) => user.name.toLowerCase().includes(query)
          || user.email.toLowerCase().includes(query))
          .map(user => (
              <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
              </tr>
          ))
        }
      </tbody>
    </table>
      </div>
    </div>
  )
}

export default UsersList

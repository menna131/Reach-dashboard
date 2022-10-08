// import React, {useState, useEffect} from 'react';
// import axios from 'axios';

// function DataFetching() {
// //  const [posts, setPosts] = useState([]);
// //  useEffect(() => {
// //     axios.get('https://jsonplaceholder.typicode.com/posts')
// //         .then(res => {console.log(res); setPosts(res.data)})
// //         .catch(err => {console.log(err)})
// //  }, []);
//   return (
//     <div>
//       {/* <ul>
//         {
//             posts.map(post => <li key={post.id}>{post.title}</li>)
//         }
//       </ul> */}
//     </div>
//   )
// }

// export default DataFetching

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetching = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
          .then(res => {console.log(res); setUsers(res.data)})
          .catch(err => {console.log(err)})
  }, []);
  return (
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
          // posts.filter((user) => user.title.toLowerCase().includes(query)).
          // map(post => <li key={post.id}>{post.title}</li>)
            users.filter((user) => user.name.toLowerCase().includes(query)).map(user => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>
            ))
        }
      </tbody>
    </table>
  )
}

export default DataFetching


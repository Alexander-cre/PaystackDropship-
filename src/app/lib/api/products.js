// pages/api/products.js
import connectToDatabase from '../../lib/mongodb';

export default async function handler(req, res) {

  const client = await connectToDatabase();

  const db = client.db('dropship'); // Replace with your database name

  if (req.method === 'GET') {
    const products = await db.collection('products').find({}).toArray();
    // Map the products to a simpler format
    const formattedProducts = products.map(product => ({
      id: product._id.toString(), // Convert ObjectId to string
      name: product.name,
      price: product.price.$numberInt, // Accessing the price
      category: product.category,
      quantity: product.quantity.$numberInt, // Accessing the quantity
      size: product.size,
    }));
    res.json(formattedProducts);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}


// // pages/index.js
// import { useEffect, useState } from 'react';

// export default function Home() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const res = await fetch('/api/users');
//       const data = await res.json();
//       setUsers(data);
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       <h1>Users</h1>
//       <ul>
//         {users.map(user => (
//           <li key={user._id}>{user.name }</li>
//         ))}
//       </ul>
//     </div>
//   );
// } ### Step 7: Handling Form Submission

// To add new users through a form, you can create a simple form component in your Next.js application.

// ```javascript
// // components/UserForm.js
// import { useState } from 'react';

// export default function UserForm() {
//   const [name, setName] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch('/api/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name }),
//     });
//     const newUser  = await res.json();
//     console.log('User  added:', newUser );
//     setName('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Enter user name"
//         required
//       />
//       <button type="submit">Add User</button>
//     </form>
//   );
// }


//  Add to DB 
// pages/index.js
// import { useEffect, useState } from 'react';
// import UserForm from '../components/UserForm';

// export default function Home() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const res = await fetch('/api/users');
//       const data = await res.json();
//       setUsers(data);
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       <h1>Users</h1>
//       <User Form />
//       <ul>
//         {users.map(user => (
//           <li key={user._id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// File: src/pages/Register.jsx
import React from 'react';

const Register = () => {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form className="bg-white p-4 rounded shadow space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
        <button className="bg-purple-600 text-white py-2 px-4 rounded w-full">Register</button>
      </form>
    </div>
  );
};

export default Register;
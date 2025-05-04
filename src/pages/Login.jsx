// File: src/pages/Register.jsx
import React from 'react';

const Register = () => {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-purple-700 mb-4">Register</h2>
      <form className="bg-white p-6 rounded shadow space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
        <button className="bg-purple-600 text-white py-2 px-4 rounded w-full hover:bg-purple-700">Register</button>
      </form>
    </div>
  );
};

export default Register;
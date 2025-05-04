// File: src/pages/Dashboard.jsx
import React from 'react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-purple-800">Welcome, Creator!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow border-l-4 border-purple-500">
          <h3 className="text-lg font-semibold">Credit Stats</h3>
          <p>Total Credits: <strong>120</strong></p>
          <p>Daily Login Bonus: <strong>+5</strong></p>
        </div>
        <div className="bg-white p-6 rounded shadow border-l-4 border-green-500">
          <h3 className="text-lg font-semibold">Recent Activity</h3>
          <ul className="list-disc list-inside">
            <li>Saved a post</li>
            <li>Reported inappropriate content</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded shadow border-l-4 border-blue-500 col-span-1 md:col-span-2 lg:col-span-3">
          <h3 className="text-lg font-semibold">Feed</h3>
          <p>Aggregated posts from Twitter, Reddit, LinkedIn, and more...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

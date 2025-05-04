// File: frontend/src/components/FeedAggregator.jsx
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/authcontext';

const FeedAggregator = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/feed`).then(res => res.json()).then(setPosts);
  }, []);

  const save = async (post) => {
    if (!user) return alert('Login first');
    await fetch(`${process.env.REACT_APP_API_URL}/feed/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`
      },
      body: JSON.stringify(post)
    });
  };

  const report = async (post) => {
    if (!user) return alert('Login first');
    await fetch(`${process.env.REACT_APP_API_URL}/feed/report`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`
      },
      body: JSON.stringify(post)
    });
  };

  return (
    <div className="p-4 space-y-4">
      {posts.map(post => (
        <div key={post.postId} className="border rounded-lg p-4 shadow">
          <h3 className="font-bold text-lg">{post.title}</h3>
          <p>{post.content}</p>
          <a className="text-blue-600 underline" href={post.link} target="_blank" rel="noreferrer">Read More</a>
          <div className="space-x-4 mt-2">
            <button onClick={() => save(post)} className="text-sm bg-green-200 px-2 py-1 rounded">Save</button>
            <button onClick={() => report(post)} className="text-sm bg-red-200 px-2 py-1 rounded">Report</button>
            <button onClick={() => { navigator.clipboard.writeText(post.link); alert('Copied!') }} className="text-sm bg-blue-200 px-2 py-1 rounded">Share</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default feedaggregator;

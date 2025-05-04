// File: backend/routes/feed.js
import express from 'express';
import fetch from 'node-fetch';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const router = express.Router();

const authenticate = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).send('Missing token');
  try {
    req.user = jwt.verify(auth.split(' ')[1], process.env.JWT_SECRET);
    next();
  } catch (err) {
    res.status(401).send('Invalid token');
  }
};

router.get('/', async (req, res) => {
  const reddit = await fetch('https://www.reddit.com/r/popular.json').then(res => res.json());
  const posts = reddit.data.children.map(p => ({
    postId: p.data.id,
    title: p.data.title,
    content: p.data.selftext,
    link: `https://reddit.com${p.data.permalink}`
  }));
  res.json(posts);
});

router.post('/save', authenticate, async (req, res) => {
  const user = await User.findById(req.user.userId);
  user.savedPosts.push(req.body);
  await user.save();
  res.send('Post saved');
});

router.post('/report', authenticate, (req, res) => {
  console.log('Reported:', req.body);
  res.send('Reported');
});

export default router;

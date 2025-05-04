// backend/routes/posts.js
import express from 'express';

const router = express.Router();

let savedPosts = [];
let reportedPosts = [];

router.post('/save', (req, res) => {
  const post = req.body;
  savedPosts.push({ ...post, savedAt: new Date() });
  res.json({ message: 'Post saved successfully!' });
});

router.post('/report', (req, res) => {
  const { id } = req.body;
  reportedPosts.push({ id, reportedAt: new Date() });
  res.json({ message: 'Post reported!' });
});

export default router;

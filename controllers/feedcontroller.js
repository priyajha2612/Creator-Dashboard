import axios from 'axios';

// Example API URLs for Twitter, Reddit
const twitterApiUrl = 'https://api.twitter.com/2/tweets';
const redditApiUrl = 'https://www.reddit.com/r/learnprogramming.json';

// Fetch feeds from external sources
export const getFeeds = async (req, res) => {
  try {
    const twitterResponse = await axios.get(twitterApiUrl, { headers: { Authorization: `Bearer YOUR_TWITTER_BEARER_TOKEN` } });
    const redditResponse = await axios.get(redditApiUrl);
    
    const feeds = [
      ...twitterResponse.data.data,
      ...redditResponse.data.data.children.map((child) => child.data)
    ];

    res.json(feeds);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching feeds' });
  }
};

// Save post
export const savePost = async (req, res) => {
  const { postId, content } = req.body;
  
  // For demo purposes, you can store posts in memory or DB
  // Save the post with user info (req.user.userId)
  
  res.status(200).json({ message: 'Post saved' });
};

// Report post
export const reportPost = async (req, res) => {
  const { postId, reason } = req.body;

  // Handle report logic (e.g., save to DB, log, etc.)
  
  res.status(200).json({ message: 'Post reported' });
};

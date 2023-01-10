const { posts } = require("../data.json");

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  const post = posts.filter((content) => content.slug === req.query.slug);
  if (req.method === "GET") {
    res.status(200).json(post);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};

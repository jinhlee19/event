/* eslint-disable import/no-anonymous-default-export */
const { API_URL } = require("@/config/index");

export default async (req, res) => {
  if (req.method === "POST") {
    const { identifier, password } = req.body;
    const starpiRes = await fetch(`${API_URL}/api/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });
    const data = await starpiRes.json();
    if (starpiRes.ok) {
      // TODO - SET Cookie
      res.status(200).json({ user: data.user });
    } else {
      //   res.status(data.error.statusCode).json(data.error.message);
      console.log(data);
    }
    console.log(data);
    res.status(200).json({});
  } else {
    res.setHeader("Allow", ["POST"]); // TODO 이건 뭐지
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};

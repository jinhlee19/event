/* eslint-disable import/no-anonymous-default-export */
import cookie from "cookie";
const { API_URL } = require("@/config/index");

export default async (req, res) => {
  if (req.method === "POST") {
    const { identifier, password } = req.body;
    const strapiRes = await fetch(`${API_URL}/api/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });
    const data = await strapiRes.json();
    console.log(data.jwt);
    if (strapiRes.ok) {
      // * SET Cookie
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", data.jwt, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: "strict",
          path: "/",
        })
      );
      res.status(200).json({ user: data.user });
    } else {
      //   res.status(data.error.statusCode).json(data.error.message);
      //   res.status(data.statusCode).json({ message: "data.message" });
      // res.status(data.statusCode).json({ message: data.message[0].messages[0].message });
      res.status(data.error.status).json({ error: data.error.message });
    }
    // console.log(data);
    // res.status(200).json({});
  } else {
    res.setHeader("Allow", ["POST"]); // TODO
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};

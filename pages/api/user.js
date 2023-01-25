/* eslint-disable import/no-anonymous-default-export */
const { API_URL } = require("@/config/index");

export default async (req, res) => {
  if (req.method === "GET") {
    if (!req.headers.cookie) {
      res.status(403).json({ message: "Not Authorized" });
      return;
    }
    // TODO 이부분 REVIEW. 쿠키 사용 다시보기 37,38

    const { token } = cookie.parse(req.headers.cookie);

    const strapiRes = await fetch(`${API_URL}/api/users/me`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const user = await strapiRes.json();

    if (strapiRes.ok) {
      res.status(200).json({ user });
    } else {
      res.status(403).json({ message: "사용자 정보가 없습니다." });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};

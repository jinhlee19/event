import Layout from "@/components/Layout";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  toast.error("err");
  return (
    <Layout title="로그인">
      <div className="auth">
        <h1>로그인</h1>
      </div>
      <ToastContainer />
    </Layout>
  );
}

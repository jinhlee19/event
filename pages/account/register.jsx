import Layout from "@/components/Layout";
import AuthContext from "@/context/AuthContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function RegisterPage() {
  // const [formData, setFormData] = useState({ email: "", password: "" });
  // const { email, password } = formData;

  // const onChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // toast.error("err");
  // useEffect(() => error && toast.error(error));
  const { register, error } = useContext(AuthContext);
  useEffect(() => {
    if (error) {
      toast.error(error);
      // console.log(error);
    }
  }, [error]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // login({ email, password });
    if (password !== passwordConfirm) {
      toast.error("비밀번호가 일치하지 않습니다.");
      return;
      // console.log("htllo");
    } else {
      // console.log({ username, email, password, passwordConfirm });
      register({ username, email, password }); // authcontext로 register
    }
  };

  return (
    <Layout className="account flex flex-col justify-center items-center">
      <ToastContainer />
      <div className="grid-mobile mx-auto flex w-full max-w-screen-xs justify-center px-4">
        <div className="container--lg border-gray-1 flex w-full flex-col justify-center space-y-1 text-center mb-8 px-4 pt-12 pb-6 lg:mb-10 lg:px-10 lg:pb-12">
          <form className="px-12" onSubmit={handleSubmit}>
            <div className="acct-title space-y-1 mb-7 ">
              <h2 className="font-bold">회원가입</h2>
              <p className="sm-text-gray">
                CROSSROAD에 오신 것을 환영합니다!🙆‍♂️
              </p>
            </div>
            <div className="acct-inputs space-y-2">
              <div className="input-container ">
                <input
                  className="input-text border-none pl-2 outline-none bg-transparent"
                  type="username"
                  name="username"
                  id="username"
                  value={username}
                  placeholder="닉네임"
                  // onChange={(e) => onChange(e)}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-container ">
                <input
                  className="input-text border-none pl-2 outline-none bg-transparent"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="이메일 주소"
                  // onChange={(e) => onChange(e)}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-container">
                <input
                  className="input-text border-none pl-2 outline-none bg-transparent"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="비밀번호"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input-container">
                <input
                  className="input-text border-none pl-2 outline-none bg-transparent"
                  htmlFor="passwordConfirm"
                  type="password"
                  name="passwordConfirm"
                  id="passwordConfirm"
                  placeholder="비밀번호 확인"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
              </div>
            </div>

            <div className="btn-login sm-text">
              <button
                type="submit"
                className="btn-set-0 bg-sky-800 hover:sky-900"
              >
                회원가입
              </button>
            </div>
          </form>

          <Link href="/">
            <p className="xs-text-gray cursor-pointer pt-2"> &larr; 돌아가기</p>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

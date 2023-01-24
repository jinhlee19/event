import Layout from "@/components/Layout";
import AuthContext from "@/context/AuthContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { IoLogoApple, IoLogoGoogle } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
export default function LoginPage() {
  // const [formData, setFormData] = useState({ email: "", password: "" });
  // const { email, password } = formData;

  // const onChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useContext(AuthContext);
  // useEffect(() => error && toast.error);
  useEffect(() => {
    if (error) {
      toast.error(error);
      // console.log(error);
    }
  }, [error]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <Layout className="account flex flex-col justify-center items-center ">
      <ToastContainer />
      <div className="grid-mobile mx-auto flex w-full max-w-screen-xs justify-center px-4">
        <div className="container--lg border-gray-1 flex w-full flex-col justify-center space-y-1 text-center mb-8 px-4 pt-12 pb-6 lg:mb-10 lg:px-10 lg:pb-12">
          <form className="px-12" onSubmit={handleSubmit}>
            <div className="acct-title space-y-1 mb-7 ">
              <h2 className="font-bold">로그인</h2>
              <p className="sm-text-gray">회원 정보를 입력해주세요.</p>
            </div>
            <div className="acct-inputs space-y-2">
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
                  type="text"
                  name="password"
                  id="password"
                  placeholder="비밀번호"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="btn-login sm-text">
              <button
                type="submit"
                className="btn-set-0 bg-sky-800 hover:sky-900"
              >
                이메일 로그인
              </button>
              <div className="my-4 flex w-full justify-between text-xs">
                <div className="basis-4/12">
                  <Link href="/account/register">회원가입</Link>
                </div>
                <div className="basis-4/12 border-r border-l">아이디찾기</div>
                <div className="basis-4/12">비밀번호찾기</div>
              </div>
            </div>
            <hr className="my-3" />
            <div className="sm-text">
              <p className="my-3 text-center">또는</p>
              <div>
                <button className="font-semibold text-black bg-amber-400 hover:bg-amber-500 w-full mt-2 py-2 rounded-md  flex justify-center items-center mb-2">
                  <IoLogoApple />
                  <span className="ml-2">카카오 로그인</span>
                </button>
                <button className="text-white bg-gray-900 hover:bg-black w-full mt-2 py-2 rounded-md  flex justify-center items-center mb-2">
                  <IoLogoApple />
                  <span className="ml-2">애플 로그인</span>
                </button>
                <button className="text-white bg-red-800 hover:bg-red-900 w-full mt-2 py-2 rounded-md  flex justify-center items-center mb-2">
                  <IoLogoGoogle />
                  <span className="ml-2">구글 로그인</span>
                </button>
              </div>
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

import Layout from "@/components/Layout";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    login(email, password);
    e.preventDefault();
  };

  return (
    <Layout className="account flex flex-col justify-center items-center ">
      <div className="grid-mobile  mx-auto flex w-full max-w-screen-xs justify-center px-4">
        <div className="container--lg border-gray-1 flex w-full flex-col justify-center space-y-1  text-center mb-8 px-4 pt-12 pb-6 lg:mb-10 lg:px-10 lg:pb-12">
          <form className="px-12" onSubmit={onSubmit}>
            <div className="acct-title space-y-1 mb-7">
              <h2>로그인</h2>
              <p className="sm-text-gray">회원 정보를 입력해주세요.</p>
            </div>
            <div className="acct-inputs space-y-2">
              <div className="input-container ">
                <input
                  className="input-text border-none pl-2 outline-none"
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="이메일 주소"
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="input-container">
                <input
                  className="input-text"
                  type="text"
                  name="password"
                  id="password"
                  placeholder="비밀번호"
                  value={password}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>

            <div className="btn-login sm-text">
              <button type="submit" className="btn-set-0">
                이메일 로그인
              </button>
              <div className="my-4 flex w-full justify-between text-xs">
                <div className="basis-3/12">회원가입</div>
                <div className="basis-4/12 border-r border-l">아이디찾기</div>
                <div className="basis-5/12">비밀번호찾기</div>
              </div>
            </div>
            <hr className="my-3" />
            <div className="sm-text">
              <p className="my-3 text-center">또는</p>
              <div>
                <button className="text-white bg-gray-700 hover:bg-gray-900 w-full mt-2 py-2 rounded-md  flex justify-center items-center mb-2">
                  {/* <Image
                    width={17}
                    height={17}
                    alt="button-icon"
                    src={iconUrl}
                  /> */}
                  <span className="ml-2">애플 로그인</span>
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

// import Layout from "@/components/Layout";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   toast.error("err");
//   return (
//     <Layout title="로그인">
//       <div className="flex h-100v items-center justify-center bg-primary-darker pb-12">
//         <div className="w-96 space-y-12 text-white">
//           <div className="flex space-x-2">
//             <Image
//               width={30}
//               height={24}
//               alt="logo"
//               src="/assets/images/common/logo-xs-white.png"
//             />
//             <span className="flex w-full text-2xl">Login</span>
//           </div>

//           <p className="text-center text-4xl font-bold">로그인</p>

//           <form action="" className="login-form space-y-12">
//             <div className="text-center">
//               <div className="text-field scrollbar-style-2">
//                 <p></p>
//               </div>
//               <input type="checkbox" />
//               <label> 이용약관동의</label>
//             </div>
//             <div className="flex flex-col space-y-4">
//               <div className="border-b border-white">
//                 <input
//                   type="text"
//                   name="accountid"
//                   id="accountid"
//                   placeholder="아이디"
//                   className="w-full border-none border-white bg-transparent"
//                 />
//               </div>
//               <div className="border-b border-white">
//                 <input
//                   type="text"
//                   name="password"
//                   id="password"
//                   placeholder="비밀번호"
//                   className="w-full border-none border-white bg-transparent"
//                 />
//               </div>
//               <div>
//                 <input type="checkbox" />
//                 <label> 아이디 저장</label>
//               </div>
//             </div>

//             <button className="btn btn-xl bg-white font-bold text-primary-darker hover:border hover:border-white hover:text-white">
//               <Link href="/">로그인</Link>
//             </button>
//           </form>
//         </div>
//       </div>
//       <ToastContainer />
//     </Layout>
//   );
// }

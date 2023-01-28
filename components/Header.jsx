import Search from "@/components/Search";
import AuthContext from "@/context/AuthContext";
import Link from "next/link";
import { useContext } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import ThemeToggler from "./ThemeToggler";
export default function Header() {
  const { user, logout } = useContext(AuthContext);
  return (
    <header className="hearder flex justify-between items-center mx-auto p-16">
      <div className="logo">
        <Link href="/">
          <a>
            cross<span className="font-light">road</span>
          </a>
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <nav className="navigation mr-16 ">
          <ul className="nav__item flex justify-between items-center">
            <li className="hidden xl:block">
              {/* <IoSearchOutline className="w-6 h-6" /> */}
              <Search />
            </li>
            {/* <li>
              <Link href="/showcase">
                <a>Get Shit Done</a>
              </Link>
            </li>
            <li>
              <Link href="/events">
                <a>In Progress</a>
              </Link>
            </li>
            <li>
              <Link href="/events">
                <a>Crew Wanted</a>
              </Link>
            </li> 
            <li>
              <Link href="/events">
                <a>CR Review</a>
              </Link>
            </li>
            */}
            {/* <li>
              <Link href="/events/search">
                <a>검색</a>
              </Link>
            </li> */}
            <li className="hidden xl:block">
              <Link href="/events">
                <a>이벤트보기</a>
              </Link>
            </li>
            {user ? (
              // if Logged in
              <>
                <li className="hidden xl:flex btn px-6 justify-center dark:bg-white dark:text-primary-darker font-semibold bg-primary-darker text-white">
                  <Link href="/events/add">
                    <a>이벤트 주최하기</a>
                  </Link>
                </li>
                <li className="hidden xl:flex btn px-6 justify-center dark:bg-white dark:text-primary-darker font-semibold bg-primary-darker text-white">
                  <Link href="/account/dashboard">
                    <a>대시보드</a>
                  </Link>
                </li>
                <li className="">
                  <button
                    className="btn flex justify-center items-center space-x-2"
                    onClick={() => logout()}
                  >
                    <IoLogOutOutline className="w-6 h-6" />
                    <a>로그아웃</a>
                  </button>
                </li>
              </>
            ) : (
              // if Logged out
              <>
                <li className="hidden md:flex btn px-6 justify-center dark:bg-white dark:text-primary-darker font-semibold bg-primary-darker text-white">
                  <Link href="/account/login">
                    <a>로그인</a>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <ThemeToggler />
      </div>
    </header>
  );
}

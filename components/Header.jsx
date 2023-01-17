import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
export default function Header() {
  return (
    <header className="hearder flex justify-between items-center mx-auto p-16">
      <div className="logo uppercase font-bold text-lg lg:text-3xl font-sans">
        <Link href="/">
          <a>
            cross<span className="font-light">road</span>
          </a>
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <nav className="navigation mr-16 ">
          <ul className="nav__item flex justify-between items-center">
            <li>
              <Link href="">
                <a>완료 프로젝트</a>
              </Link>
            </li>
            <li>
              <Link href="/events">
                <a>진행 프로젝트</a>
              </Link>
            </li>
            <li>
              <Link href="/events">
                <a>팀원모집 중</a>
              </Link>
            </li>
            <li>
              <Link href="/events">
                <a>CR 리뷰</a>
              </Link>
            </li>

            <li className="btn w-28 justify-center flex dark:bg-white dark:text-primary-darker font-semibold bg-primary-darker text-white">
              <Link href="/">
                <a>같이가요!</a>
              </Link>
            </li>
          </ul>
        </nav>
        <ThemeToggler />
      </div>
    </header>
  );
}

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

            <li className="btn px-6 justify-center flex dark:bg-white dark:text-primary-darker font-semibold bg-primary-darker text-white">
              <Link href="/">
                <a>Hell Gate</a>
              </Link>
            </li>
          </ul>
        </nav>
        <ThemeToggler />
      </div>
    </header>
  );
}

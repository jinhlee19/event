import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
export default function Header() {
  return (
    <header className="hearder flex justify-between items-center mx-auto p-16">
      <div className="logo uppercase font-semibold text-lg lg:text-3xl font-sans">
        <Link href="/">
          <a>Blog</a>
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <nav className="navigation mr-16">
          <ul className="nav__item flex space-x-6 uppercase lg-text">
            <li>All</li>
            <li>Series</li>
            <li>Agency</li>
          </ul>
        </nav>
        <ThemeToggler />
      </div>
    </header>
  );
}

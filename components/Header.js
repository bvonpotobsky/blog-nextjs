import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

// Theme icons
import Moon from "../assets/icons/Moon.jsx";
import Sun from "../assets/icons/Sun.jsx";

export const Header = () => {
  const { theme, setTheme } = useTheme("light");

  const router = useRouter();
  const activeLink =
    "border-b-2 border-black dark:border-white transition-transform";

  return (
    <header className="w-full">
      <ul className="flex justify-around items-center w-full h-12 text-gray-900 font-medium dark:text-white">
        <li className={router.asPath === "/" ? activeLink : ""}>
          <Link href="/">
            <a>About</a>
          </Link>
        </li>
        <li className={router.asPath === "/contact" ? activeLink : ""}>
          <Link href="/contact">
            <a>Contact me</a>
          </Link>
        </li>
        <li className={router.asPath === "/projects" ? activeLink : ""}>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li className="cursor-pointer">
          {theme === "light" ? (
            <a onClick={() => setTheme("dark")}>
              <Moon />
            </a>
          ) : (
            <a onClick={() => setTheme("light")}>
              <Sun />
            </a>
          )}
        </li>
      </ul>
    </header>
  );
};

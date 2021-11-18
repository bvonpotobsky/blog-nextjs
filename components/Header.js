import { useState } from "react";
import Link from "next/link";

import { SocialMedia } from "../components/SocialMedia/SocialMedia";
import { ThemeToggler } from "../components/ThemeToggler";
import { Squash } from "hamburger-react";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const showNav = !isOpen ? "-translate-x-full" : "-translate-x-0";

  return (
    <header className="relative">
      <div className="flex justify-between items-center pr-1.5">
        <Squash onToggle={() => setOpen(!isOpen)} />
        <ThemeToggler />
      </div>

      <nav className={`mobileNavbar ${showNav}`}>
        <Link href="/">
          <a className="mt-28">Home</a>
        </Link>
        <Link href="/about">
          <a className="mt-4">About</a>
        </Link>
        <Link href="/portfolio">
          <a className="mt-4">Portfolio</a>
        </Link>
        <Link href="/contact">
          <a className="mt-4">Contact</a>
        </Link>
        <SocialMedia />
      </nav>
    </header>
  );
};

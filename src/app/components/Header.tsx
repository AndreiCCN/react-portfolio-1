"use client";

import Link from "next/link";
import Navbar from "./Navbar";
import { useState } from "react";
import { CloseIcon, GlobeIcon, MenuIcon } from "./Icons";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr_3fr_1fr]">
        <h1>
          <Link href="#home">
            <GlobeIcon w={40} h={40} />
          </Link>
        </h1>
        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden!"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            {navOpen ? <CloseIcon w={30} h={30} /> : <MenuIcon w={30} h={30} />}
          </button>
          <Navbar navOpen={navOpen} />
        </div>
        <Link
          href="#contact"
          className="btn btn-secondary max-md:hidden! md:justify-self-end"
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
};

export default Header;

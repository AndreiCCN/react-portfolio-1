"use client";

import Link from "next/link";
import { RefObject, useEffect, useRef } from "react";

const Navbar = ({ navOpen }: { navOpen: boolean }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);

  const initActiveBox = () => {
    window.addEventListener("resize", initActiveBox);
    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };

  useEffect(initActiveBox, []);

  // eslint-disable-next-line
  const activeCurrentLink = (e: any) => {
    lastActiveLink.current?.classList.remove("active");
    e.target.classList.add("active");
    lastActiveLink.current = e.target;

    activeBox.current.style.top = e.target.offsetTop + "px";
    activeBox.current.style.left = e.target.offsetLeft + "px";
    activeBox.current.style.width = e.target.offsetWidth + "px";
    activeBox.current.style.height = e.target.offsetHeight + "px";
  };

  const navItems: {
    label: string;
    link: string;
    className: string;
    ref: RefObject<null>;
  }[] = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
      ref: null,
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
      ref: null,
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden!",
      ref: null,
    },
  ];

  return (
    <nav className={`${navOpen && "active"} navbar`}>
      {navItems.map(({ label, link, className, ref }, index) => {
        return (
          <Link
            key={`nav-item-${index}`}
            href={link}
            ref={ref}
            className={className}
            onClick={activeCurrentLink}
          >
            {label}
          </Link>
        );
      })}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

export default Navbar;

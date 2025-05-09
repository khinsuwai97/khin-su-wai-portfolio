"use client";
import { useState, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { navLinks } from "@/data";
import ThemeToggle from "./ThemeToggle";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  // const [toggleMode, setToggleMode] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);
  const [scrollNav, setScorllNav] = useState(false);
  const { theme, setTheme } = useTheme();

  const changeNav = useCallback(() => {
    if (window.scrollY >= 400) {
      setScorllNav(true);
    } else {
      setScorllNav(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => window.removeEventListener("scroll", changeNav);
  }, [changeNav]);

  const handleToggleNav = () => {
    setToggleNav((prevToggleNav) => !prevToggleNav);
  };

  const closeNav = () => {
    setToggleNav(false);
  };

  // to fix next hydration error
  useEffect(() => {
    setMounted(true);
  }, []);

  // const closeToggleMode = () => {
  //   setToggleMode(false);
  // };

  const renderTheme = () => {
    if (!mounted) return null;
    if (theme === "light") {
      return <MdOutlineDarkMode className="text-[24px]" />;
    }

    if (theme === "dark") {
      return <MdOutlineWbSunny className="text-[24px]" />;
    }
  };

  // const handleToggleMode = () => {
  //   setToggleMode((prevMode) => !prevMode);
  // };

  return (
    <>
      <nav
        className={`md:h-[90px] h-[80px] px-[48px] flex items-center justify-between ${
          scrollNav
            ? "top-0 z-[999] sticky dark:bg-navBgDark bg-navBg shadow-md"
            : ""
        } `}
      >
        <div>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="tracking-wider sm:text-[28px] text-[22px] text-blueColor font-bold cursor-pointer  no-underline z-50 "
          >
            Portfolio
          </Link>
        </div>
        <div className="md:hidden gap-3 flex items-center">
          <button
            onClick={() => {
              theme === "dark" ? setTheme("light") : setTheme("dark");
            }}
            // onClick={handleToggleMode}
            className="toggle-mode-hover  
          
          
          "
          >
            {renderTheme()}
          </button>
          <button onClick={handleToggleNav}>
            <FaBars className="text-[24px] cursor-pointer text-blueColor" />
          </button>
        </div>

        <ul className="list-none md:flex hidden justify-end items-center flex-1 md:h-[90px]">
          {navLinks.map((navLink) => (
            <li
              className="no-underline font-bold cursor-pointer tracking-wider text-[18px] dark:text-slate-200 text-slate-800 mr-10 activeLink "
              key={navLink.id}
            >
              <Link
                to={navLink.id}
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                {navLink.title}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            theme === "dark" ? setTheme("light") : setTheme("dark");
          }}
          // onClick={handleToggleMode}
          className="toggle-mode-hover md:flex hidden"
        >
          {renderTheme()}
        </button>
      </nav>

      {/* {toggleMode && <ThemeToggle closeTheme={closeToggleMode} />} */}
      <Sidebar closeNav={closeNav} toggleNav={toggleNav} />
    </>
  );
};

export default Navbar;

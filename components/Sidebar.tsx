'use client';
import { FC } from 'react';
import { navLinks } from '@/data';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

interface SidebarProps {
  closeNav: () => void;
  toggleNav: boolean;
}

const Sidebar: FC<SidebarProps> = ({ closeNav, toggleNav }) => {
  return (
    <aside
      className={`sidebar dark:bg-primary bg-sidbarBg ${
        toggleNav ? 'show-sidebar' : ''
      }`}
    >
      <div className="flex justify-between items-center pt-[16px] px-[24px] mb-5">
        <Link
          className=" tracking-wider sm:text-[28px] text-[22px] text-blueColor font-bold cursor-pointer no-underline z-50"
          to="home"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          onClick={closeNav}
        >
          Portfolio
        </Link>
        <button onClick={closeNav}>
          <FaTimes className="text-[24px] cursor-pointer text-blueColor z-50" />
        </button>
      </div>
      <ul className="text-left pt-[16px] px-[24px] ">
        {navLinks.map((link) => {
          return (
            <li
              key={link.id}
              className="no-underline tracking-wider cursor-pointer text-[18px] dark:text-slate-200 text-slate-800 mb-8 font-bold links "
            >
              <Link
                to={`${link.id}`}
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                onClick={closeNav}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;

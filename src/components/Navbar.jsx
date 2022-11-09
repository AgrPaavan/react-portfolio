import React, { useState } from "react";
import {
  FaBars,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";
import { HiOutlineLink, HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
      moff: -80,
    },
    {
      id: 3,
      link: "projects",
      doff: -80,
      moff: -80,
    },
    {
      id: 4,
      link: "skills",
      doff: -80,
      moff: -80,
    },
    {
      id: 5,
      link: "contact",
      doff: -50,
      moff: -80,
    },
  ];

  const socialLinks = [
    {
      id: 3,
      child: (
        <>
          <HiOutlineLink size={30} />
        </>
      ),
      href: "https://linktr.ee/agrpaavan",
    },
    {
      id: 3,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/AgrPaavan",
    },
    {
      id: 3,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/paavan-agrawal-28186a201/",
    },
    {
      id: 4,
      child: (
        <>
          <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/paavanagr/",
    },
    {
      id: 5,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:paavanagr@gmail.com",
    },
  ];

  return (
    <div
      id="navbar"
      className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed"
    >
      <div>
        <h1 className="text-5xl font-signature ml-2 text-accent hover:cursor-pointer">
          <Link to="home" smooth duration={500}>
            Paavan
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, doff }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500} offset={doff}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          <ul className="flex flex-col justify-center items-center">
            {links.map(({ id, link, moff }) => (
              <li
                key={id}
                className="px-4 py-6 text-3xl capitalize font-medium"
              >
                <Link
                  onClick={() => {
                    setNav(!nav);
                    window.scrollBy(0, 1);
                  }}
                  to={link}
                  smooth
                  duration={500}
                  offset={moff}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-row justify-center items-center static">
            {socialLinks.map(({ id, child, href, style }) => (
              <li
                key={id}
                className="py-8 px-4 cursor-pointer hover:scale-105 duration-200"
              >
                <a href={href} target="_blank" rel="noreferrer">
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

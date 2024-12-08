import React, { useState } from "react";
import { Link } from "react-scroll";
function NavBar(props) {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "education" },
    { id: 4, link: "skills" },
    { id: 5, link: "hobbies" },
    { id: 6, link: "contact" },
  ];

  return (
    <div name="head" className="sticky top-0 w-full h-20 bg-black ">
      <div className="flex items-center justify-between text-white ">
        <h1 className="mt-5 ml-6 text-4xl font-name">Vigneshwaran</h1>
        <div className="mt-5 text-white">
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 font-medium text-gray-500 capitalize duration-200 cursor-pointer hover:scale-110 hover:text-myColor"
              >
                <Link
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          {/* <div
            onClick={() => setNav(!nav)}
            className="z-10 pr-4 text-gray-500 cursor-pointer md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div> */}
          {nav && (
            <ul className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-gray-500 bg-gradient-to-b from-black to-gray-800">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 py-6 text-4xl capitalize cursor-pointer"
                >
                  <Link
                    onClick={() => setNav(!nav)}
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;

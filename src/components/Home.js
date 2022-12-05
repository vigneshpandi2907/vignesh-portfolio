import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import profile from "../images/my-img.jpg";
import resume from "../images/Vigneshwaran_Resume.docx";
const Home = () => {
  // bg-gradient-to-b from-black via-gray to-gray-600
  return (
    <div name="home" className="w-full h-screen bg-black md:h-96">
      <div className="flex flex-col items-center justify-center h-full max-w-screen-lg px-4 pt-40 mx-auto md:flex-row ">
        <div className="flex flex-col justify-center w-3/4 h-auto">
          <h1 class="flex font-bold text-white">
            Hello <span class="animate-wavingHand">👋🏻</span>,
          </h1>

          <p className="text-2xl font-bold text-white sm:text-5xl">
            I'm a Full Stack <span className="text-myColor">Developer</span>
          </p>
          <p className="max-w-md py-4 text-gray-500">
            I have a good knowledge in java, angular, react.
          </p>
          <div>
            <a
              href={resume}
              download={true}
              className="flex items-center px-6 py-3 my-2 text-white rounded-md cursor-pointer group w-fit bg-myColor"
            >
              Resume
              <span className="duration-300 group-hover:translate-x-2">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </a>
            {/* </button> */}
          </div>
        </div>

        <div className="flex">
          <img
            src={profile}
            alt="my profile"
            className="mx-auto h-72 medium:h-96 rounded-2xl w-max md:w-full"
          />
        </div>
      </div>
      <div className="h-20 overflow-hidden sm:h-20 md:h-48 medium:h-48 lg:h-48 ">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z"
            className="stroke-none fill-black"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Home;

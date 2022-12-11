import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Contact = (props) => {
  return (
    <div name="contact" className=" bg-contactContent">
      <p className="pt-3 pl-10 text-lg font-bold text-myColor">Contact</p>
      <p className="pt-2 pl-10 text-xs text-gray-400">
        Submit the form below to get in touch with me
      </p>
      <div className="flex items-center justify-center">
        <div class="w-full max-w-xs xs:max-w-sm sm:max-w-lg mt-3 mb-10">
          <form
            action="https://getform.io/f/a18c12b6-0993-46cd-8cce-81067d1c0b4e"
            method="POST"
            class="bg-form rounded-xl bg-opacity-70 px-8 pt-6 pb-6 mb-4"
          >
            <div class="mb-4">
              <label
                class="block text-myColor text-sm font-bold mb-2"
                for="name"
              >
                Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your Name"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-myColor text-sm font-bold mb-2"
                for="email"
              >
                E-Mail
              </label>
              <input
                class=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="email"
                type="email"
                placeholder="Enter your mail"
              />
            </div>
            <div class="mb-3">
              <textarea
                name="message"
                class="shadow appearance-none border rounded  w-full py-2 px-3 h-24  text-gray-700  leading-tight focus:outline-none focus:shadow-outline  overflow-hidden resize-none "
                placeholder="Enter your comments"
              ></textarea>
            </div>
            <div className="flex items-center justify-end">
              <button
                className="flex items-center px-2 py-1 my-2 text-white rounded-md cursor-pointer group w-fit bg-myColor"
                type="submit"
              >
                Let's Talk
                <span className="duration-300 group-hover:translate-x-2">
                  <MdOutlineKeyboardArrowRight size={25} />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

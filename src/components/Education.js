import React from "react";

const Education = (props) => {
  // shadow-[0_3px_10px_rgb(0,0,0,0.2)]
  return (
    <div
      name="education"
      className="flex items-center justify-center w-full h-full py-3 pt-96 xlsm:pt-60 xsm:pt-44 sm:pt-14 smallMedium:5 "
    >
      <div className="w-11/12">
        <div>
          <p className="pt-10 text-2xl font-bold text-myColor">Education</p>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="py-3">
              <p>2018</p>
              <p className="text-xl font-semibold">HSC</p>

              <p>Nadar Saraswathi Higher secondary School, Theni.</p>
            </div>
            <div className="py-1">
              <p>2018-2022</p>
              <p className="text-xl font-semibold">B.TECH - IT</p>
              <p>Panimalar Institute of Technology, Chennai.</p>
            </div>
          </div>
        </div>
        <hr class="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700" />

        <div>
          <p className="pt-5 text-2xl font-bold text-myColor">Working</p>
          <div className="grid grid-cols-2">
            <div className="py-5">
              <p>7 Months -present</p>
              <p className="text-xl font-semibold">Full Stack Developer</p>

              <p>Clarium Tech PVt Ltd, Chennai</p>
            </div>
          </div>
        </div>
        {/* <hr class="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700" /> */}
      </div>
    </div>
  );
};

export default Education;

import React from "react";
import profile from "../images/profile-latest.jpg";
const About = (props) => {
  return (
    <div
      name="about"
      className="grid grid-cols-1 mt-32 mr-8 md:grid-cols-3 h-96 border-3 md:mt-48 "
    >
      <div className="hidden w-full lg:block">
        <div className="">
          <img
            src={profile}
            alt="my profile"
            className="mx-auto h-72 medium:h-96 rounded-2xl"
          />
        </div>
      </div>
      <div className="w-full col-span-3 px-10 lg:px-5 lg:col-span-2 ">
        <h3 className="text-3xl font-bold text-center text-myColor lg:text-left">
          About me
        </h3>
        <hr class="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700" />

        <p className="text-justify">
          Vigneshwaran has experience in building end to end applications,
          starting with building user interfaces, service layer and database
          access layer for multiple applications.He is technically sophisticated
          and resourceful developer having good Knowledge in API development, UI
          development and database.
          <br />
          <br />
          He has experience in Spring boot, MYSQL, SQL, Angular and React which
          involves designing and implementing solutions for multi-tier
          applications. He also has knowledge on Drools and flowable. He is
          skilled in delivering projects on time. He has a strong technical base
          and understanding of integration Database, API and UI. He has
          contributed for the Design, API development and Angular UI of Learning
          management system.
          <br />
          <br />
          He has a strong technical base and understanding of the Banking and
          Business domain of projects. He has strong problem-solving mindset and
          willingness to get into technical details to provide solutions.
        </p>
      </div>
    </div>
  );
};

export default About;

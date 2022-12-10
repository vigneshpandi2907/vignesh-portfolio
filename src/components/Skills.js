import React from "react";
import Html from "../images/Html.png";
import css from "../images/css.png";
import javaScript from "../images/javascript.png";
import bootstrap from "../images/bootstrap.jfif";
import angular from "../images/angular.png";
import react from "../images/react.png";
import java from "../images/java.jpg";
import sql from "../images/sql.png";
import mySql from "../images/mysql.jfif";

const Skills = (props) => {
  const skills = [
    {
      id: 1,
      src: Html,
      title: "HTML",
      Style: "",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      Style: "",
    },
    {
      id: 3,
      src: javaScript,
      title: "JavaScript",
      Style: "",
    },
    {
      id: 4,
      src: bootstrap,
      title: "Bootstrap",
      Style: "",
    },

    {
      id: 5,
      src: angular,
      title: "Angular",
      Style: "",
    },
    {
      id: 6,
      src: react,
      title: "React",
      Style: "",
    },
    {
      id: 7,
      src: java,
      title: "JAVA",
      Style: "",
    },

    {
      id: 8,
      src: sql,
      title: "sql",
      Style: "",
    },
    {
      id: 9,
      src: mySql,
      title: "MySql",
      Style: "",
    },
  ];
  return (
    // bg-gradient-to-b from-white via-gray to-black
    <div
      name="skills"
      className="flex items-center justify-center w-full h-full smallMedium:pt-2 bg-gradient-to-r from-slate-900 to-slate-500"
    >
      <div className="w-11/12">
        <h2 className="ml-4 font-bold text-myColor">Skills</h2>
        <div className="grid justify-center w-full grid-cols-3 gap-6 py-8 mt-5 ml-5 xsm:grid-cols-4 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 sm:px-0">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="w-20 duration-500 rounded-2xl hover:-translate-y-3 hover:delay-100 bg-myColor sm:w-32 "
            >
              <img
                src={skill.src}
                alt=" "
                className="w-20 h-16 mx-auto sm:h-32 sm:w-32 rounded-tr-2xl rounded-tl-2xl"
              />
              <p className="pb-3 mt-4 text-sm font-bold text-center text-white sm:text-xl">
                {skill.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

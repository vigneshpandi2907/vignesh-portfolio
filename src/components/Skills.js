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
    // <div className="relative w-96 h-96 transform-gpu animate-waving-hand">
    //   <span className="">
    //     <img src={angular} alt="Vignesh" />
    //     <img src={img2} alt="Vignesh" />
    //     <img src={img3} alt="Vignesh" />
    //     <img src={img4} alt="Vignesh" />
    //     <img src={img5} alt="Vignesh" />
    //   </span>
    // </div>

    // <div className="relative grid items-center m-auto h-max ">
    //   <div className="flex ">
    //     <div className="flex items-center m-2 border-2 border-red-500 w-72 h-96 ">
    //       <img className="w-full h-3/5" src={angular} alt="Vignesh" />
    //     </div>
    //     <div className="flex items-center w-64 m-2 border-2 border-red-500 h-96">
    //       <img className="w-full h-3/5" src={img2} alt="Vignesh" />
    //     </div>
    //     <div className="flex items-center w-64 m-2 border-2 border-red-500 h-96">
    //       <img className="w-full h-3/5" src={img3} alt="Vignesh" />
    //     </div>
    //     <div className="flex items-center w-64 m-2 border-2 border-red-500 h-96">
    //       <img className="w-full h-3/5" src={img4} alt="Vignesh" />
    //     </div>
    //     <div className="flex items-center w-64 m-2 border-2 border-red-500 h-96">
    //       <img className="w-full h-3/5" src={img5} alt="Vignesh" />
    //     </div>
    //     <div className="flex items-center w-64 m-2 border-2 border-red-500 h-96">
    //       <img className="w-full h-3/5" src={img6} alt="Vignesh" />
    //     </div>
    //     <div className="flex items-center w-64 m-2 border-2 border-red-500 h-96">
    //       <img className="w-full h-3/5" src={angular} alt="Vignesh" />
    //     </div>
    //     <div className="flex items-center w-64 m-2 border-2 border-red-500 h-96">
    //       <img className="w-full h-3/5" src={img2} alt="Vignesh" />
    //     </div>
    //     <div className="flex items-center w-64 m-2 border-2 border-red-500 h-96">
    //       <img className="w-full h-3/5" src={img3} alt="Vignesh" />
    //     </div>
    //     <div className="flex items-center w-64 m-2 border-2 border-red-500 h-96">
    //       <img className="w-full h-3/5" src={img4} alt="Vignesh" />
    //     </div>
    //   </div>
    // </div>
    // bg-gradient-to-b from-white via-gray to-black
    <div
      name="skills"
      className="flex items-center justify-center w-full h-full smallMedium:pt-2 bg-gradient-to-b from-gray-400 via-gray to-white"
    >
      <div className="w-11/12">
        <h2 className="ml-4 font-bold text-myColor">Skills</h2>
        <div className="grid justify-center w-full grid-cols-2 gap-6 py-8 mt-5 ml-5 smallMedium:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:px-0">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="duration-500 w-36 rounded-2xl hover:-translate-y-3 hover:delay-100 bg-myColor md:w-48 "
            >
              <img
                src={skill.src}
                alt=" "
                className="mx-auto h-36 md:h-44 rounded-tr-2xl w-60 rounded-tl-2xl"
              />
              <p className="pb-3 mt-4 text-xl font-bold text-center text-white">
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

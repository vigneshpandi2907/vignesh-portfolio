import React from "react";
import drawing from "../images/drawing.png";
import cooking from "../images/cooking.webp";
const Hobbies = (props) => {
  return (
    <div
      name="hobbies"
      className="flex items-center h-full py-10 justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
    >
      <div className="w-11/12">
        <p className="pb-5 pl-5 text-xl font-bold text-myColor">Hobbies</p>
        <div className="grid w-full h-full grid-cols-1 xl:grid-cols-2 ">
          <div className="flex items-center justify-center mb-5 delay-75 xl:mb-0 hover:scale-100 ">
            <div className="flex-none w-9/12 border-2 sm:flex rounded-xl ">
              <div className="flex sm:flex-none">
                <img
                  src={drawing}
                  alt="cook"
                  className="w-32 bg-cover rounded-tl-xl rounded-bl-xl"
                />
                <p className="mt-10 ml-3 text-2xl font-bold font-headline text-myColor sm:hidden">
                  Drawing
                </p>
              </div>
              <div className="p-2 pl-5 ">
                <p className="hidden text-2xl font-bold font-headline text-myColor sm:block">
                  Drawing
                </p>

                <p>
                  I love drawing because it gave me respect. It made me popular
                  among my friends. One of the major reasons why I love drawing
                  because it gives me wings to fly.It helps improves hand-eye
                  concentration.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <div className="flex-none w-9/12 border-2 sm:flex rounded-xl">
              <div className="flex sm:flex-none">
                <img
                  src={cooking}
                  alt="cook"
                  className="w-32 bg-cover rounded-tl-xl rounded-bl-xl"
                />
                <p className="mt-10 ml-3 text-2xl font-bold font-headline text-myColor sm:hidden">
                  Cooking
                </p>
              </div>
              <div className="p-2 pl-5">
                <p className="hidden text-2xl font-bold font-headline text-myColor sm:block">
                  Cooking
                </p>

                <p>
                  Cooking is like love. It should be entered into with abandon
                  or not at all.Cooking requires confident guesswork and
                  experimentation and dealing with failure and uncertainty in a
                  creative way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;

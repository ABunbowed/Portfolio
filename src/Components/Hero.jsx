import React from "react";
import Typed from "react-typed";


const Hero = () => {

  const techStack = [
    {
      name: "HTML",
      image:"html-5 (1)"
    },

    {
      name: "CSS",
      image:"css-3 (1)"

    },

    {
      name:"Tailwind",
      image:"tailwind-css-icon"
    },

    {
      name:"Javascript",
      image:"js"
    },

    {
      name:"Reactjs",
      image:"physics"
    },
    {
      name:"Git",
      image:"git"
    },

    {
      name:"Github",
      image:"github"
    },
    {
      name: "Wordpress",
      image: "wordpress (3)"
    }
  ]


  return (
    <div>
      <div className="max-w-[1000px] mt-[-96px] w-full max-h-[900px] h-screen mx-auto text-left flex flex-col justify-center px-10 ">
        <p className="md:text-2xl  sm:text-1xl text-xl text-[#1686CD] pb-5">Hi, My Name is</p>
        <h1 className="text-transform:capitalize md:text-8xl  sm:text-7xl text-5xl text-[#ccd6f6] pb-5">
         Abe-Jhay Cross
        </h1>
        <div className="flex justify-left ">
          <p className="md:text-5xl  sm:text-4xl text-2xl ">I am a </p>
          <Typed
                    className="capitalize md:text-5xl  sm:text-4xl text-2xl pl-2 "
                    strings={[' Web Developer', " Graduate", " Student"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
          
        </div>
        
      </div>
      <div className="max-w-[1000px] mt-[-96px] w-full max-h-[900px] mx-auto justify-center px-10 ">
      <h1 className="text-transform:capitalize md:text-3xl  sm:text-2xl text-l text-[#ccd6f6] pb-5">
      Tech Stack
      </h1>
      <div className="flex flex-row justify-between">

      {techStack.map((tech, index) => (
        <img
        src={require ("../../src/Assets/" + tech.image + '.png')}
        alt={tech.title}
        className="max-w-[50px] "
        ></img>
      ))}
      </div>

      </div>
    </div>
  );
};

export default Hero;

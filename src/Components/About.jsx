import React from "react";
import crown from "../Assets/crown.jpeg";

const About = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-[880px] mx-auto grid md:grid-cols-2 justify-center">
        <div>
          
          
          <h1 className="pl-2 font-bold text-2xl border-b border-[#1686CD]">
          <span className="text-[rgb(22,134,205)]">01.</span> About
          </h1>
          <p className="pt-5 px-3">
            Hello! I'm Abe-Jhay, a passionate web developer with a drive for
            innovation. With a{" "}
            <span className="text-[#1686CD]">First-Class Honor degree</span> in
            Business Information Systems, I've embraced the dynamic world of web
            development.
          </p>
          <br></br>
          <p className="px-3">
            My expertise lies in <span className="text-[#1686CD]">HTML</span>,{" "}
            <span className="text-[#1686CD] ">CSS</span>,{" "}
            <span className="text-[#1686CD]">JavaScript</span>,{" "}
            <span className="text-[#1686CD]">React</span>,{" "}
            <span className="text-[#1686CD]">Tailwind</span>, and
            <span className="text-[#1686CD]"> WordPress</span>. These tools
            allow me to create stunning user interfaces, dynamic web
            applications, and efficient, responsive websites.
          </p>
          <br></br>
          <p className="px-3">
            I'm also the creative mind behind{" "}
            <a
              href="https://www.aacwebdesign.com/"
              className="text-[#1686CD] text-decoration-line: underline"
            >
              AAC Web Design
            </a>
            , a venture where I apply my skills to deliver seamless,
            user-centric web solutions. At AAC Web Design, I've honed my ability
            to simplify complex challenges, delivering captivating websites that
            stand out in a crowded digital landscape.
          </p>
          <br></br>
          <p className="px-3">
            Driven by simplicity, sophistication, and speed, I thrive on turning
            visions into reality. If you're seeking a web developer who combines
            technical mastery with a creative touch, I'm the right fit. Let's
            collaborate and build a remarkable web legacy together.
          </p>
        </div>
        <div className="m-auto py-3">
          <img src={crown} height="300" width="300"></img>
        </div>
      </div>
    </div>
  );
};

export default About;

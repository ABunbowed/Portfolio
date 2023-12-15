import React, { useState } from "react";

function Experience() {
  const experiences = [
    {
      title: "AAC Web Design",
      role: "@CEO",
      date: "Web Design & Marketing Agency - 2023",
      points: [
        "Established AAC Web Design, focusing on front-end web development and design.",
        "Led front-end web development utilizing HTML, CSS, WordPress themes, Divi, and various plugins to create user-friendly websites.",
        "Designed and managed content-rich websites in WordPress for a diverse client base.",
        "Implemented responsive design principles to ensure optimal performance across devices and screen sizes.",
      ],
    },
    {
      title: "CryptoLib",
      role: "@Personal Project",
      date: "Cryptocurrency Tracker & News - 2023",
      points: [
        "Developed CryptoLib, a real-time cryptocurrency data and visualization library.",
        "Integrated multiple cryptocurrency APIs for up-to-date information and historical data.",
        "Implemented dynamic and interactive charts using Chart.js for user-friendly data visualization.",
        "Utilized Redux for efficient state management, ensuring seamless API interactions.",
      ],
    },
    {
      title: "Keepa",
      role: "@Personal Project",
      date: "Google Keep Clone - 2023",
      points: [
        "Created Keepa, a note-taking app inspired by Google Keep, using React for the front end.",
        "Implemented expandable input areas and a clean UI for an improved note-taking experience.",
        "Utilized Material-UI components and icons to enhance the app's visual appeal.",
        "Enabled note creation and deletion functionalities with a user-friendly interface.",
      ],
    },
  ];

  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  const handleExperienceChange = (experience) => {
    setSelectedExperience(experience);
  };

  return (
    <div className="w-full py-16 px-4 ">
      <div className="max-w-[880px] mx-auto grid sm:grid-cols-2 justify-center">
        {/* First column */}
        <div>
          <h1 className="pl-2 font-bold text-2xl border-b border-[#1686CD] mb-10">
            <span className="text-[rgb(22,134,205)]">02.</span> Experience
          </h1>
          <div className="px-3 sm:flex sm:flex-col align- align-content: float-left flex flex-row">
            {experiences.map((experience, index) => (
              <button
                key={index}
                className={`p-3 border-[#495670] sm:border-l-2 max-sm:border-b-2 hover:bg-[#112240] ease-in-out duration-500 focus:border-[#1686CD] focus:text-[#1686CD] ${
                  experience === selectedExperience ? "bg-[#112240]" : ""
                }`}
                onClick={() => handleExperienceChange(experience)}
              >
                {experience.title}
              </button>
            ))}
          </div>
        </div>
        {/* Second column */}
        <div className="pt-16">
          <div className="max-sm:px-5">
            <h2 className="text-[#ccd6f6]">
              {selectedExperience.title}
              <span className="text-[#1686CD]">
                {" "}
                {selectedExperience.role}
              </span>{" "}
            </h2>
            <p className="underline decoration-[#495670]">
              {selectedExperience.date}
            </p>
            <div className="pt-4">
              <ul className="marker:text-[#1686CD] list-disc">
                {selectedExperience.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

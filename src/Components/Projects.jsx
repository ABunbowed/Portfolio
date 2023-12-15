import React from 'react'




const Projects = () => {
  const projects = [
    {
        title: "AAC Web Design",
        image: "aacwebd",
        link: "https://www.aacwebdesign.com/",
    },
    {
        title: "CryptoLib",
        image: "cryptolib",
        link: "https://crypto-lib1.vercel.app/",
    },
    {
        title: "Keepa",
        image: "keepa",
        link: "https://keepa.vercel.app/"
    }

  ]

  return (
   <div className="w-full py-16 px-4 ">
   
      <div className="max-w-[880px] mx-auto">
      <h1 className="pl-2 font-bold text-2xl border-b border-[#1686CD] mb-10">
            <span className="text-[rgb(22,134,205)]">03.</span> Projects
          </h1>
          
      {projects.map((project, index) => (
        <a 
        key={index}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-8 flex justify-center"
        >
            <img 
            src={require ("../../src/Assets/" + project.image + '.png')}
            alt={project.title}
            className="w-2/3 h-auto rounded-md shadow-md grayscale hover:grayscale-0 "
            ></img>
        </a>
      ))}
    
      </div>
      </div>
  )
}

export default Projects
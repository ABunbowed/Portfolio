import React from 'react'

const Contact = () => {


  const contacts = [
    {
      name : "Github",
      image: "github",
      link: "https://github.com/ABunbowed"
    },
    {
      name: "LinkedIn",
      image: "linkedin",
      link: "https://www.linkedin.com/in/abe-jhay-cross-6b1020224/"
    },
    {
      name: "CV",
      image: "pdf",
      link: "https://docs.google.com/document/d/e/2PACX-1vQyFKypSTDaJ6qq5RxGe6t7J-1RynnDPtRIwNw0U8ntuuPMXY3m-BQBaO0UB9WbGt1VU0Zue3s5HF_4/pub",
    }

  ]


  return (

    <div className="w-full py-16 px-4 ">
    <div className="max-w-[880px] mx-auto justify-center">
        <h1 className="pl-2 font-bold text-2xl border-b border-[#1686CD] mb-10">
          <span className="text-[rgb(22,134,205)]">04.</span> Contact
        </h1>
        <div className='grid grid-cols-3 gap-4'>

        {contacts.map((contact, index)=> (
          <a
          key={contact.index}
          href={contact.link}
          >
          <img
          src={require ("../../src/Assets/" + contact.image + '.png')}
          alt={contact.title}
          className='max-w-[70px]'
          ></img>
          </a>
        ))}
        </div>



        </div>
        </div>
  )
}

export default Contact
import React from "react"
import Image from "next/image"

const skills = [
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Tailwind CSS" },
  { skill: "Python" },
  { skill: "Node" },
  { skill: "PostgreSQL" },
  { skill: "MongoDB" },
  { skill: "Express" },
  { skill: "Git" },
  { skill: "GitHub" },
]

const About = () => {
  return (
    <section id="about">
      <div className="my-12 md:pb-48 dark:text-stone-400">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-16 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <div className="flex flex-row justify-around">

              <p>
                Hi, my name is Luigi and I am a{" "}
                <span className="font-bold">{"highly ambitious"}</span>,
                <span className="font-bold">{" self-motivated"}</span>, and
                <span className="font-bold">{" driven"}</span> Full stack developer
                based in Santiago del Estero, Argentina.

                <br /><br />

                I graduated from Henry Bootcamp, in 2021
                with more than 900 hours of code and have been working in the
                field ever since.

                <br /><br />

                I have a lot of hobbies and passions that keep me busy.
                From playing with my dogs and cats, playing sports, cooking for mates, to mentoring friends to learn programming,
                I am always seeking new experiences and love to stay engaged with projects and learning new technologies.

                <br /><br />

                My goal is{" "}
                <span className="font-bold text-teal-500">
                  to never stop being curious
                </span>{" "}
                because it drives me to be a good learner. I combine that with my passion for technology and
                my desire to always go beyond the limits, imagining solutions or projects that have a significant impact on companies. 🤓
              </p>
            </div>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-row">
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {skills.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  )
                })}
              </div>
              <Image
                src="/hero-image.png"
                alt=""
                width={190}
                height={100}
                className="hidden md:block md:relative md:w-1/2 md:h-1/2"
              />
            </div>            
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
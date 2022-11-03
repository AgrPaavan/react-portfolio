import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full xs:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-[#219be5]">
            About
          </h2>
        </div>

        <p className="text-lg mt-10">
          I am currently pursuing B.Tech in CSE with specialization in Software
          Engineering from{" "}
          <a
            href="https://www.srmist.edu.in/"
            target="_blank"
            rel="noreferrer"
            className="border-b-2 border-gray-500"
          >
            SRMIST
          </a>
          . I completed the schooling from{" "}
          <a
            href="http://www.doonschool.com/"
            target="_blank"
            rel="noreferrer"
            className="border-b-2 border-gray-500"
          >
            The Doon School
          </a>
          .
        </p>

        <br />

        <p className="text-lg">
          I started coding when I was in the 9th grade as a requirment for my
          GCSE Computer Science course but have since felt in love with it. I
          wish that I was introduced to the world of programming earlier in my
          life but am happy that I came around to it sooner than later.
        </p>

        <br />

        <p className="text-lg">
          Currently I am trying to upskill myself in the field of web
          development. Recently I learnt how to use the react framework. I also
          learnt how to use bootstrap and tailwind css frameworks. I also plan
          to learn how to integrate databases and code the backend in hopes of
          being a full-stack engineer.
        </p>

        <br />

        <p className="text-lg">
          I know how to code in basic Java thanks to my school coursework and
          have learnt basic C and C++ in my college course. I am pursuing a
          specialization in software engineering so I hope I get to learn
          advanced C++ to help me write complete softwares.
        </p>
      </div>
    </div>
  );
};

export default About;

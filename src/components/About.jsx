import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </h2>
        </div>

        <p className="text-lg mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          id. Incidunt dolore eaque, aperiam, corrupti doloremque ratione
          veniam, in facilis rerum dolorem nam maiores officiis adipisci!
          Eligendi vitae libero nemo iure corrupti, optio ipsam laudantium ut
          qui laborum animi nesciunt est aperiam necessitatibus quis aliquam
          sequi accusantium tempora. Voluptatem, vitae.
        </p>

        <br />

        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          pariatur nisi eos nam minima, doloremque velit architecto, ea
          corporis, voluptatem totam sunt ipsa fugit quo consequatur ab? Sequi
          ipsam labore possimus tenetur quibusdam porro est ratione corporis, id
          eligendi non neque consectetur atque debitis. Modi illo distinctio
          ullam rerum enim!
        </p>
      </div>
    </div>
  );
};

export default About;

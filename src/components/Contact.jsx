import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to bg-gray-800"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full text-white">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-accent">
            Contact
          </h2>
          <p className="py-6">Submit the form to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/7a224a96-398c-4b8b-811a-fabd74234df3"
            method="POST"
            target="_blank"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter you name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter you email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

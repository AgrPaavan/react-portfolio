import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h3 className="text-1xl sm:text-2xl font-light text-[#219be5]">
            Hi, I'm
          </h3>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Paavan Agrawal
          </h2>
          <p className="text-gray-500 py-4 max-w-sm sm:max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            ipsam eveniet, quibusdam laudantium consequatur saepe, ullam natus
            consectetur quos aliquam itaque. Cupiditate ad tenetur amet. Fugiat
            nisi sequi blanditiis molestiae!
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex flex-row items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiOutlineArrowRight size={18} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { Tweets } from "./index";
import me from "../../assets/me.jpg";

const Center = () => {
  return (
    <div className="center w-[78%] lg:w-[50%] mr-7 h-full border-x border-x-gray-600">
      <div className="flex flex-row justify-between bg-dim-900 items-center py-3 px-2  sm:px-5 border-b border-gray-600 sticky top-0">
        <h2 className="m-0 text-2xl">Home</h2>
        <i className="fa-brands fa-twitter  text-lg  text-blue-400"></i>
      </div>
      <div className="py-5 px-2  sm:px-5">
        <div className="flex flex-row items-start">
          <img
            src={me}
            className="inline-block w-11 h-11 rounded-full mr-4 bg-white"
            alt=""
          />
          <textarea
            className="w-9/12 outline-none resize-none pt-2 bg-transparent h-32"
            placeholder="What's happening?"
          ></textarea>
        </div>
        <div className="flex flex-row justify-between items-center flex-wrap">
          <div className="flex flex-row space-x-5 text-dim-100">
            <a href="##" className="p-2">
              <i className="fa-solid fa-image text-lg"></i>
            </a>
            <a href="##" className="p-2">
              <i className="fa-brands fa-git text-lg"></i>
            </a>
            <a href="##" className="p-2">
              <i className="fa-solid fa-square-poll-horizontal text-lg"></i>
            </a>
            <a href="##" className="p-2">
              <i className="fa-solid fa-face-smile text-lg"></i>
            </a>
            <a href="##" className="p-2">
              <i className="fa-solid fa-business-time  text-lg"></i>
            </a>
          </div>
          <a
            href="##"
            className="p-2 px-5 mt-5 block md:mt-0 rounded-full bg-dim-500 text-white   text-center hover:bg-blue-500"
          >
            Tweet
          </a>
        </div>
      </div>
      <div className=" text-center border-y border-x-gray-600  py-5 px-2  sm:px-5 cursor-pointer text-dim-50">
        Show 9 Tweet
      </div>
      <Tweets />
      <Tweets />
      <Tweets />
      <Tweets />
      <Tweets />
      <Tweets />
      <div className="py-2 bg-gray-800">
        <div className="text-center bg-dim-900 border-y  border-gray-500 py-5">
          <h2>Customize Your View</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            veniam itaque, ratione id ea esse quasi debitis! Maiores, animi ut
          </p>
          <a
            href="##"
            className="p-2 w-40 inline-block mt-4 rounded-full bg-dim-500 text-white   text-center hover:bg-blue-500"
          >
            Toogle Dark Mode
          </a>
        </div>
      </div>
      <div className="py-5 text-center text-dim-100">
        <i className="fa-solid fa-circle-notch fa-2x animate-spin"></i>
      </div>
    </div>
  );
};

export default Center;

import React from "react";

const Right = () => {
  return (
    <div className="right w-[28%] pt-2 hidden h-full lg:block sticky top-0">
      <div className="relative w-full">
        <i className="fa-solid fa-magnifying-glass absolute left-1.5 top-1/2 -translate-y-1/2 z-10 text-gray-500"></i>
        <input
          className="w-full rounded-lg p-1 pl-7 text-black dark:bg-lsit-50 outline-none"
          type="text"
          placeholder="Search Ttter"
        />
      </div>
      <div className="rounded-lg w-full dark:bg-lsit-50 mt-5">
        <h2 className="p-3 border-b border-gray-500 cursor-pointer">
          What's happening?
        </h2>
        <h2 className="p-3 border-b border-gray-500 cursor-pointer">
          #palestine
        </h2>
        <h2 className="p-3 border-b border-gray-500 cursor-pointer">
          #palestine
        </h2>
        <h2 className="p-3 border-b border-gray-500 cursor-pointer">
          #palestine
        </h2>
        <h2 className="text-dim-500 p-3 cursor-pointer">Show More</h2>
      </div>
      <div className="rounded-lg w-full dark:bg-lsit-50 mt-5">
        <h2 className="p-3 border-b border-gray-500 cursor-pointer">
          Who to Follow
        </h2>
        <div className="p-3 flex flex-row justify-between border-b border-gray-500">
          <div className="flex flex-row items-start">
            <img
              src="##"
              className="w-11 h-11 rounded-full bg-white inline-block mr-2"
              alt=""
            />
            <div>
              <p>Abobakr</p>
              <p>@Abobakr</p>
            </div>
          </div>
          <div className="p-2 border border-dim-800 hover:text-white cursor-pointer text-white hover:bg-dim-800 rounded-lg">
            Follow
          </div>
        </div>
        <div className="p-3 flex flex-row justify-between items-center border-b border-gray-500">
          <div className="flex flex-row items-start">
            <img
              src="##"
              className="w-11 h-11 rounded-full bg-white inline-block mr-2"
              alt=""
            />
            <div>
              <p>Abobakr</p>
              <p>@Abobakr</p>
            </div>
          </div>
          <div className="p-2 border border-dim-800 hover:text-white cursor-pointer text-white hover:bg-dim-800 rounded-lg">
            Follow
          </div>
        </div>
        <div className="p-3 flex flex-row justify-between border-b border-gray-500">
          <div className="flex flex-row items-start">
            <img
              src="##"
              className="w-11 h-11 rounded-full bg-white inline-block mr-2"
              alt=""
            />
            <div>
              <p>Abobakr</p>
              <p>@Abobakr</p>
            </div>
          </div>
          <div className="p-2 border border-dim-800 hover:text-white cursor-pointer text-white hover:bg-dim-800 rounded-lg">
            Follow
          </div>
        </div>
        <h2 className="text-dim-500 p-3 cursor-pointer">Show More</h2>
      </div>
    </div>
  );
};

export default Right;

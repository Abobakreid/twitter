import React from "react";
import me from "../../assets/me.jpg";
const Tweets = () => {
  return (
    <>
      <div className="post py-5 px-2 sm:px-5 flex flex-row items-start border-b border-gray-500">
        <div className="w-80 md:w-48 mr-1 sm:mr-1">
          <img
            src={me}
            className="block cursor-pointer w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white"
            alt=""
          />
        </div>
        <div>
          <h4 className="m-0">
            AboBakr <span className="mx-0.5">@AboBakr </span> <span>20</span>
          </h4>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            quam culpa enim exercitationem libero ea maxime dicta! Magni, hic,
            laborum beatae mollitia nesciunt nulla maxime ut perferendis,
            corrupti quae nam?
          </p>
          <img src={me} className="w-full h-72 my-5 rounded-xl" alt="" />
          <div className="flex justify-between items-center">
            <span className="cursor-pointer">
              <i className="fa-solid fa-comment mr-2 text-lg"></i>0
            </span>
            <span className="cursor-pointer">
              <i className="fa-solid fa-retweet mr-2 text-lg"></i>0
            </span>
            <span className="cursor-pointer">
              <i className="fa-solid fa-heart mr-2 text-lg"></i>0
            </span>
            <span className="cursor-pointer">
              <i className="fa-solid fa-share mr-2 text-lg"></i>0
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tweets;

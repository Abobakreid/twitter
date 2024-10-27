import React from "react";
import me from "../../assets/me.jpg";

const Left = ({
  showMore,
  setshowMore,
  showProfile,
  setshowProfile,
  showcrStudio,
  setshowcrStudio,
  showprofTools,
  setshowprofTools,
  showsettings,
  setshowsettings,
}) => {
  return (
    <div className="left w-[19%]  sm:w-1/4 px-1 pt-2 sm:p-2 h-full flex flex-col sticky top-0">
      <nav className="space-y-1.5 sm:space-y-4 w-full flex flex-col text-xl">
        <a href="##" className="block py-1 sm:p-2 text-center sm:text-start">
          <i className="fa-brands fa-twitter text-3xl text-dim-100 dark:text-white dark:hover:text-dim-100"></i>
        </a>
        <a
          href="##"
          className="p-2 text-dim-200 dark:text-white justify-center sm:justify-start flex w-full items-center rounded-md dark:hover:bg-lsit-50"
        >
          <i className="fa-solid fa-house  sm:mr-4"></i>
          <span className="hidden sm:inline-block">Home</span>
        </a>
        <a
          href="##"
          className="p-2 text-center sm:text-start text-dim-200 justify-center sm:justify-start dark:text-white w-full flex items-center rounded-md dark:hover:bg-lsit-50 hover:text-dim-100"
        >
          <i className="fa-solid fa-hashtag  sm:mr-4"></i>
          <span className="hidden sm:inline-block">Explore</span>
        </a>
        <a
          href="##"
          className="p-2 text-dim-200 dark:text-white justify-center sm:justify-start flex w-full items-center rounded-md dark:hover:bg-lsit-50 hover:text-dim-100"
        >
          <i className="fa-solid fa-bell   sm:mr-4"></i>
          <span className="hidden sm:inline-block">Notifications</span>
        </a>
        <a
          href="##"
          className="p-2 text-dim-200 dark:text-white justify-center sm:justify-start w-full flex items-center rounded-md dark:hover:bg-lsit-50 hover:text-dim-100"
        >
          <i className="fa-solid fa-envelope   sm:mr-4"></i>
          <span className="hidden sm:inline-block">Message</span>
        </a>
        <a
          href="##"
          className="p-2 text-dim-200 dark:text-white justify-center sm:justify-start w-full flex items-center rounded-md dark:hover:bg-lsit-50 hover:text-dim-100"
        >
          <i className="fa-solid fa-bookmark   sm:mr-4"></i>
          <span className="hidden sm:inline-block">bookmark</span>
        </a>
        <a
          href="##"
          className="p-2 text-dim-200 dark:text-white justify-center sm:justify-start w-full flex items-center rounded-md dark:hover:bg-lsit-50 hover:text-dim-100"
        >
          <i className="fa-solid fa-list-ul   sm:mr-4"></i>
          <span className="hidden sm:inline-block">lists</span>
        </a>
        <a
          href="##"
          className="p-2 text-dim-200 dark:text-white justify-center sm:justify-start w-full flex items-center rounded-md dark:hover:bg-lsit-50 hover:text-dim-100"
        >
          <i className="fa-solid fa-user   sm:mr-4"></i>
          <span className="hidden sm:inline-block">Profile</span>
        </a>
        <div
          className="p-2 cursor-pointer text-dim-200 justify-center sm:justify-start w-full dark:text-white rounded-md dark:hover:bg-lsit-50 flex items-center hover:text-dim-100
           relative"
          onClick={(e) => {
            e.stopPropagation();
            setshowMore(true);
          }}
        >
          <i className="fa-solid fa-ellipsis sm:mr-4"></i>
          <span className="hidden sm:inline-block">More</span>
          <div
            className={
              showMore
                ? "absolute flex flex-col w-72 h-[229px] overflow-y-auto rounded-md left-0 bottom-0 bg-black bg-dim shadow-[0_0_10px_0px_white]"
                : "hidden"
            }
          >
            <div className="flex flex-col py-1">
              <div>
                <a
                  href="##"
                  className="py-2 px-4 text-dim-200 dark:text-white flex items-center dark:hover:bg-lsit-50 hover:text-dim-100"
                >
                  <i className="fa-solid fa-user mr-4"></i>
                  <span className="inline-block">Topics</span>
                </a>
              </div>
              <div>
                <a
                  href="##"
                  className="py-2 px-4 text-dim-200 dark:text-white  flex items-center dark:hover:bg-lsit-50 hover:text-dim-100"
                >
                  <i className="fa-solid fa-user mr-4"></i>
                  <span className="inline-block">Twitter Circle</span>
                </a>
              </div>
              <div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setshowcrStudio(!showcrStudio);
                  }}
                  className="p-2 text-dim-200 dark:text-white flex justify-between items-center darkhover:bg-lsit-50 dark:hover:bg-lsit-50 hover:text-dim-100 text-md"
                >
                  <span className="inline-block">Creator Studio</span>
                  <i
                    className={
                      showcrStudio
                        ? "fa-solid fa-chevron-up text-xltext-gray-800 dark:text-dim-50"
                        : "fa-solid fa-chevron-down text-xltext-gray-800 dark:text-white"
                    }
                  ></i>
                </div>
                <div className={showcrStudio ? "block" : "hidden"}>
                  <a
                    href="##"
                    className="p-2 text-dim-200 dark:text-white justify-center sm:justify-start w-full flex items-center rounded-md dark:hover:bg-lsit-50 hover:text-dim-100"
                  >
                    <i className="fa-solid fa-user   sm:mr-4"></i>
                    <span className="hidden sm:inline-block">Profile</span>
                  </a>
                  <a
                    href="##"
                    className="p-2 text-dim-200 dark:text-white justify-center sm:justify-start w-full flex items-center rounded-md dark:hover:bg-lsit-50 hover:text-dim-100"
                  >
                    <i className="fa-solid fa-user   sm:mr-4"></i>
                    <span className="hidden sm:inline-block">Profile</span>
                  </a>
                  <a
                    href="##"
                    className="p-2 text-dim-200 dark:text-white justify-center sm:justify-start w-full flex items-center rounded-md dark:hover:bg-lsit-50 hover:text-dim-100"
                  >
                    <i className="fa-solid fa-user   sm:mr-4"></i>
                    <span className="hidden sm:inline-block">Profile</span>
                  </a>
                </div>
              </div>
              <div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setshowprofTools(!showprofTools);
                  }}
                  className="p-2 text-dim-200 dark:text-white flex justify-between items-center darkhover:bg-lsit-50 dark:hover:bg-lsit-50 hover:text-dim-100 text-md"
                >
                  <span className="inline-block">Professional Tools</span>
                  <i
                    className={
                      showprofTools
                        ? "fa-solid fa-chevron-up text-xltext-gray-800 dark:text-dim-50"
                        : "fa-solid fa-chevron-down text-xltext-gray-800 dark:text-white"
                    }
                  ></i>
                </div>
                <div className={showprofTools ? "block" : "hidden"}>
                  <a
                    href="##"
                    className="p-2 text-dim-200 dark:text-white justify-center sm:justify-start w-full flex items-center rounded-md dark:hover:bg-lsit-50 hover:text-dim-100"
                  >
                    <i className="fa-solid fa-user   sm:mr-4"></i>
                    <span className="hidden sm:inline-block">Profile</span>
                  </a>
                  <a
                    href="##"
                    className="p-2 text-dim-200 dark:text-white justify-center sm:justify-start w-full flex items-center rounded-md dark:hover:bg-lsit-50 hover:text-dim-100"
                  >
                    <i className="fa-solid fa-user   sm:mr-4"></i>
                    <span className="hidden sm:inline-block">Profile</span>
                  </a>
                  <a
                    href="##"
                    className="p-2 text-dim-200 dark:text-white justify-center sm:justify-start w-full flex items-center rounded-md dark:hover:bg-lsit-50 hover:text-dim-100"
                  >
                    <i className="fa-solid fa-user   sm:mr-4"></i>
                    <span className="hidden sm:inline-block">Profile</span>
                  </a>
                </div>
              </div>
              <div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setshowsettings(!showsettings);
                  }}
                  className="p-2 text-dim-200 dark:text-white flex justify-between items-center darkhover:bg-lsit-50 dark:hover:bg-lsit-50 hover:text-dim-100 text-md"
                >
                  <span className="inline-block">Settings and Support</span>
                  <i
                    className={
                      showsettings
                        ? "fa-solid fa-chevron-up text-xltext-gray-800 dark:text-dim-50"
                        : "fa-solid fa-chevron-down text-xltext-gray-800 dark:text-white"
                    }
                  ></i>
                </div>
                <div className={showsettings ? "block" : "hidden"}>
                  <a
                    href="##"
                    className="p-2 text-dim-200 dark:text-white justify-center sm:justify-start w-full flex items-center rounded-md dark:hover:bg-lsit-50 hover:text-dim-100"
                  >
                    <i className="fa-solid fa-user   sm:mr-4"></i>
                    <span className="hidden sm:inline-block">Profile</span>
                  </a>
                  <a
                    href="##"
                    className="p-2 text-dim-200 dark:text-white justify-center sm:justify-start w-full flex items-center rounded-md dark:hover:bg-lsit-50 hover:text-dim-100"
                  >
                    <i className="fa-solid fa-user   sm:mr-4"></i>
                    <span className="hidden sm:inline-block">Profile</span>
                  </a>
                  <a
                    href="##"
                    className="p-2 text-dim-200 dark:text-white justify-center sm:justify-start w-full flex items-center rounded-md dark:hover:bg-lsit-50 hover:text-dim-100"
                  >
                    <i className="fa-solid fa-user sm:mr-4"></i>
                    <span className="hidden sm:inline-block">Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          href="##"
          className="py-2.5 px-1 sm:px-2 inline-block w-full text-center rounded-lg bg-dim-500 text-white sm:w-4/5 hover:bg-blue-500"
        >
          Tweet
        </a>
      </nav>
      <div
        className="relative cursor-pointer mt-auto -bottom-2"
        onClick={(e) => {
          e.stopPropagation();
          setshowProfile(!showProfile);
        }}
      >
        <div className="flex justify-center rounded-2xl hover:bg-lsit-50 sm:py-2 sm:px-2">
          <img
            src={me}
            className="block md:mr-5 w-11 h-11 rounded-full bg-white"
            alt=""
          />
          <div className="hidden flex-1 justify-between items-center md:flex">
            <div>
              <h4 className="m-0">Abobakr</h4>
              <span>@Abobakr</span>
            </div>
            <div>
              <i className="fa-solid fa-ellipsis text-xs text-gray-800 dark:text-white"></i>
            </div>
          </div>
        </div>
        <div
          className={
            showProfile
              ? "absolute w-72 left-0 bottom-16 py-2 rounded-lg dark:bg-black shadow-[0_0_10px_0px_white]"
              : "hidden"
          }
        >
          <div className="flex flex-row py-3 px-4 items-center border-b border-gray-500">
            <div className="flex flex-row">
              <img
                src={me}
                className="inline-block w-14 h-14 rounded-full mr-4 bg-white"
                alt=""
              />
              <div>
                <h4 className="m-0">Abobakr</h4>
                <span>@Abobakr</span>
              </div>
            </div>
            <div>
              <i className="fa-solid fa-chevron-down text-xs hidden md:block items-center xl:ml-4 text-gray-800 dark:text-white"></i>
            </div>
          </div>
          <div className="pb-2">
            <span className="py-2.5 px-3 block w-full dark:hover:bg-lsit-50 ">
              Add an existing Account
            </span>
            <span className="py-2.5 px-3 block w-full dark:hover:bg-lsit-50 ">
              Log Out @@AboBakr
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;

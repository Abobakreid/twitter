import React, { useState } from "react";
import { Left, Center, Right } from "../../components/HomeComponents";
const Home = () => {
  const [showMore, setshowMore] = useState(false);
  const [showProfile, setshowProfile] = useState(false);
  const [showcrStudio, setshowcrStudio] = useState(false);
  const [showprofTools, setshowprofTools] = useState(false);
  const [showsettings, setshowsettings] = useState(false);

  console.log(showMore);
  const toggle = () => {
    setshowProfile(false);
    setshowMore(false);
  };
  return (
    <div className="home h-full" onClick={toggle}>
      <div className="container flex gap-x-2 mx-auto xl:max-w-[80%]">
        <Left
          showMore={showMore}
          setshowMore={setshowMore}
          showProfile={showProfile}
          setshowProfile={setshowProfile}
          showcrStudio={showcrStudio}
          setshowcrStudio={setshowcrStudio}
          showprofTools={showprofTools}
          setshowprofTools={setshowprofTools}
          showsettings={showsettings}
          setshowsettings={setshowsettings}
        />
        <Center />
        <Right />
      </div>
    </div>
  );
};

export default Home;

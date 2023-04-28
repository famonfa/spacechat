import React from "react";
import "../components/Landing/Landing.css";
import Rocket from "../assets/rocket.png";

const SecondPage = () => {
  return (
    <div className="secondWrapper">
      <div className="text">
        Introducing our revolutionary chat app - the perfect platform for
        staying connected with your friends and family, no matter where you are
        in the world. <br />
        <br /> Our app is packed with amazing features that make chatting and
        sharing a breeze. With our user-friendly interface, you can easily send
        messages, photos, videos, and voice notes to anyone on your contact
        list. Plus, our powerful search function makes it easy to find old
        conversations or important information quickly.
      </div>
      <div className="imgDiv">
        <img className="img" src={Rocket} alt="chatman" />
      </div>
    </div>
  );
};

export default SecondPage;

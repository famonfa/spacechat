import React, { useState } from "react";
import "./Landing.css";
import Login from "../../pages/Login";

import Register from "../../pages/Register";
import SecondPage from "../SecondPage";

const Landing = () => {
  const [isLogged, setIsLogged] = useState(false)
  return (
    <div className="landingWrapper">
      <div className="landingFront">
        <div>
        <p id="head1" className="header">
          Welcome to Space Chat
        </p>
        <p id="head2" className="header">
        Connect with friends
        </p>
        <p id="head3" className="header">
        Connect with friends
        </p>
        <p id="head4" className="header">
        simple and awesome

        </p>
        <p id="head5" className="header">
        Connect with friends
        </p>
        </div>
        <div className="formWrapper">
      {isLogged ? <Login setIsLogged={setIsLogged}/> : <Register setIsLogged={setIsLogged}/>}
        </div>
        </div>
        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>
        <div className="light x6"></div>
        <div className="light x7"></div>
        <div className="light x8"></div>
        <div className="light x9"></div>

        <SecondPage/>
     
    </div>
  );
};

export default Landing;

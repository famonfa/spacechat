import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { useState } from "react";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const onLogout = () => {
    signOut(auth);
    navigate("/");
  };

  return (
    <div className="navbar">
      <span className="logo">SpaceChat</span>

      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span
          className="isShownedUser"
          style={{ cursor: "pointer" }}
          onClick={() => setShow((prevState) => !prevState)}
        >
          <TfiMenu />
        </span>
        <div className={`${!show ? "userHidden" : "userShowned"}`}>
          <span>{currentUser.displayName}</span>
          <button onClick={onLogout}>Logout</button>
        </div>
      </div>
      <button className="logOut" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;

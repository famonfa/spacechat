import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLogged }) => {
  const [err, setErr] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/chat");
      setErr(false);
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formWrapper">
      <div className="formCard">
        <h2>SpaceChat</h2>
        <p>Log in</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>Sign Up</button>
          {err && <span>Oops... Something went wrong</span>}

          <p className="hasAccount">
            You do not have an account?{" "}
            <span
              onClick={() => setIsLogged((prevState) => !prevState)}
              className="spanLog"
            >
              Register
            </span>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

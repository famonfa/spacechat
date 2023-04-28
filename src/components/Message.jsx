import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { useRef } from "react";
import { useEffect } from "react";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className={`${!message.img ? "messageContent" : "hasImg"} `}>
        {message.img && <img src={message.img} alt="" />}
        <p>{message.text}</p>
        <span>{message.date[0]}</span>
      </div>
    </div>
  );
};

export default Message;

import React from "react";
import "./MailList.css";

function MailList() {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, Save money!</h1>
      <span className="mailDesc">
        Sign up and we'll send the best deals to you
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subcsribe</button>
      </div>
    </div>
  );
}
export default MailList;

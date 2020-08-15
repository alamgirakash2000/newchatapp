import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Welcome.style.css";

function Welcome(props) {
  return (
    <div className="text-center welcome">
      {props.currentUserPhoto ? (
        <img
          className="welcome__image"
          alt="/static/images/avatar/1.jpg"
          src={props.currentUserPhoto}
        />
      ) : (
        <Avatar
          className="avatar"
          alt={props.currentUser}
          src="/static/images/avatar/1.jpg"
        />
      )}
      <h5> Hello {props.currentUser}!! Welcome to this WebChat App.</h5>
      <h6>Let's connect to the world</h6>
    </div>
  );
}

export default Welcome;

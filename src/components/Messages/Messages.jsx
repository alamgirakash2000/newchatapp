import React from "react";
import "./Messages.style.css";
import LoginString from "../../Pages/Login/LoginString";

function Messages({ msg }) {
  let className;
  const currentUserId = localStorage.getItem(LoginString.ID);

  if (!msg) {
    return null;
  }

  if (msg.ids.indexOf(currentUserId) === 0) {
    className = "mine";
  } else {
    className = "others";
  }

  const showDate = () => {
    document
      .getElementById(`${msg.timestamp}${msg.timestamp}`)
      .classList.toggle("d-none");
  };

  let date = getDate(msg.timestamp || 0);
  return (
    <div onClick={showDate} className={`msg ${className}`}>
      {msg.text ? <p className="my-0">{msg.text}</p> : null}
      {msg.url ? (
        <img src={msg.url} className="message__image" alt="Image Load Failed" />
      ) : null}

      <small id={`${msg.timestamp}${msg.timestamp}`} className="d-none my-0">
        {date}
      </small>
    </div>
  );
}

const getDate = (oldTime) => {
  if (oldTime === 0) {
    return <small>Just now</small>;
  }
  let newTime = new Date();
  let diff = Math.floor((newTime - oldTime.seconds * 1000) / 1000);

  let hrs = Math.floor(diff / 3600);
  let min = Math.floor(diff / 60);
  let sec = diff;

  let date = new Date(oldTime.seconds * 1000);
  date = date.toLocaleString();

  if (hrs >= 24) {
    return <small>{date}</small>;
  } else if (hrs) {
    return <small>{hrs} hours ago </small>;
  } else if (min) {
    return <small>{min} minutes ago</small>;
  } else if (sec) {
    return <small>{sec} seconds ago</small>;
  }
};

export default Messages;

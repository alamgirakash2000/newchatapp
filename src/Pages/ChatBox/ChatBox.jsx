import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Avatar from "@material-ui/core/Avatar";
import Messages from "../../components/Messages/Messages";
import ChatboxBottom from "../../components/ChatboxBottom/ChatboxBottom";
import "./ChatBox.style.css";
import firebase from "../../firebase/Config";
import LoginString from "../Login/LoginString";

function ChatBox(props) {
  const [messages, setMessages] = useState([]);

  const currentUser = localStorage.getItem(LoginString.Name);
  const currentUserId = localStorage.getItem(LoginString.ID);
  const currentPairUser = props.currentPairUser;

  useEffect(() => {
    firebase
      .firestore()
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => {
            let msg = doc.data();
            if (
              msg.ids.includes(currentPairUser.id) &&
              msg.ids.includes(currentUserId)
            ) {
              return msg;
            } else {
              return null;
            }
          })
        );
      });
  }, [currentPairUser]);

  return (
    <div className="viewChat">
      <div className="headerChatBoard">
        {currentPairUser.URL ? (
          <img
            className="w-25"
            alt="/static/images/avatar/1.jpg"
            src={currentPairUser.URL}
          />
        ) : (
          <Avatar
            className="avatar"
            alt={currentUser}
            src="/static/images/avatar/1.jpg"
          />
        )}
        <div className="text-left ml-3">
          <h5 className="my-0">{currentPairUser.name}</h5>
          <p className="my-0">{currentPairUser.description}</p>
        </div>
      </div>
      <div className="viewListContentChat">
        {messages.map((msg) => (
          <Messages msg={msg} />
        ))}
      </div>

      <div className="imageshowbox d-none">
        <img id="imageshowbox" alt=""></img>
      </div>
      <div className="viewBottom">
        <ChatboxBottom
          showToast={props.showToast}
          currentPairUser={currentPairUser}
        />
      </div>
    </div>
  );
}

export default ChatBox;

//<Messages msg={msg} />

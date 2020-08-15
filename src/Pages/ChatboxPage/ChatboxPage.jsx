import React from "react";
import Chatbox from "../ChatBox/ChatBox";

function ChatboxPage() {
  let currentPairUser = JSON.parse(localStorage.getItem("currentPairUser"));
  return (
    <div>
      <Chatbox currentPairUser={currentPairUser} />
    </div>
  );
}
export default ChatboxPage;

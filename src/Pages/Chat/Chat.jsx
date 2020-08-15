import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Chat.style.css";
import LoginString from "../Login/LoginString";
import firebase from "../../firebase/Config";
import Chatbox from "../ChatBox/ChatBox";
import Welcome from "../Welcome/Welcome";

function Chat(props) {
  const currentUser = localStorage.getItem(LoginString.Name);
  const currentUserId = localStorage.getItem(LoginString.ID);
  const currentUserPhoto = localStorage.getItem(LoginString.PhotoURL);
  const [searchedText, setSearchedText] = useState("");
  const [currentPairUser, setCurrentPairUser] = useState(null);

  const [displayedContacts, setDisplayContacts] = useState([]);
  const searchUsers = [];

  const logout = () => {
    let out = window.confirm("Are you really want to logout?");
    if (out) {
      firebase.auth().signOut();
      props.history.push("/");
      localStorage.clear();
    }
  };

  const onProfileClick = () => {
    props.history.push("/profile");
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          let person = doc.data();
          if (
            person.id !== currentUserId &&
            person.name.toLowerCase().includes(searchedText.toLocaleLowerCase())
          ) {
            searchUsers.push(person);
          }
          return;
        });
        setDisplayContacts(searchUsers);
      });
  }, [searchedText]);

  return (
    <div className="root bg-dark">
      <div className="body container">
        <div className="d-flex row">
          <div className="col-md-4 usersList d-flex flex-column" id="usersList">
            <div className=" w-100 d-flex justify-content-between my-2 px-2 chatlist-header">
              {currentUserPhoto ? (
                <img
                  className="ProfilePicture"
                  alt="/static/images/avatar/1.jpg"
                  src={currentUserPhoto}
                  onClick={onProfileClick}
                />
              ) : (
                <Avatar
                  className="avatar"
                  alt={currentUser}
                  src="/static/images/avatar/1.jpg"
                  onClick={onProfileClick}
                />
              )}
              <button className="btn h-50 my-auto btn-danger" onClick={logout}>
                Logout
              </button>
            </div>
            <div className="">
              <div className="w-100 my-3 d-flex text-info align-items-center">
                <i className="fa fa-search fa-2x mr-2"></i>
                <input
                  className="py-2 search-input"
                  type="text"
                  value={searchedText}
                  placeholder="Search User"
                  onChange={(e) => {
                    setSearchedText(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="d-block">
              {displayedContacts.map((user) => (
                <button
                  id={user.id}
                  className="w-100 my-2 px-2 py-1 text-white users"
                  onClick={() => {
                    setCurrentPairUser(user);
                    if (window.screen.width < 600) {
                      props.history.push("./chatbox");
                    }
                    localStorage.setItem(
                      "currentPairUser",
                      JSON.stringify(user)
                    );
                  }}
                >
                  <img className=" w-25" src={user.URL} alt="" />
                  <div className="">
                    <h5 className="textItem">{user.name}</h5>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="col-md-8 d-md-block d-none" id="chatbox">
            {currentPairUser ? (
              <Chatbox
                currentPairUser={currentPairUser}
                showToast={props.showToast}
              />
            ) : (
              <Welcome
                currentUser={currentUser}
                currentUserPhoto={currentUserPhoto}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;

import React, { useEffect, useState } from "react";
import { Image, Send } from "@material-ui/icons";
import * as Firebase from "firebase/app";
import firebase from "../../firebase/Config";
import LoginString from "../../Pages/Login/LoginString";
import "./ChatboxBottom.Style.css";

function ChatboxBottom(props) {
  const [inputValue, setInputValue] = useState("");
  const [newPhoto, setNewPhoto] = useState(null);

  let refInput = null;
  const currentUserId = localStorage.getItem(LoginString.ID);
  const storage = firebase.storage();

  // Effect of selecting different images
  const onSelectImage = async (e) => {
    if (e.target.files && e.target.files[0]) {
      if (e.target.files[0].type.toString().indexOf("image") !== 0) {
        props.showToast(0, "This file is not an image");
        return;
      }
      setNewPhoto(e.target.files[0]);
    } else {
      props.showToast(0, "Something wrong with image");
    }
  };

  useEffect(() => {
    setNewPhoto(null);
    setInputValue("");
  }, [props.currentPairUser]);

  // After sending the message
  const onSendMessage = async () => {
    if (!newPhoto && !inputValue.trim()) {
      return;
    }
    if (newPhoto) {
      let path = newPhoto.name + " " + Math.floor(Math.random() * 1000);
      const uploadTask = storage.ref(`images/${path}`).put(newPhoto);

      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          // Error Function
          console.log(error);
        },
        () => {
          // Complete function ...
          storage
            .ref("images")
            .child(path)
            .getDownloadURL()
            .then((url) => {
              // post image inside the database
              firebase
                .firestore()
                .collection("messages")
                .add({
                  ids: currentUserId + " " + props.currentPairUser.id,
                  text: inputValue.trim(),
                  url: url,
                  timestamp: Firebase.firestore.FieldValue.serverTimestamp(),
                })
                .then(() => {
                  setNewPhoto(null);
                  setInputValue("");
                })
                .catch((err) => {
                  console.log(err);
                });
            });
        }
      );
    } else {
      firebase
        .firestore()
        .collection("messages")
        .add({
          ids: currentUserId + " " + props.currentPairUser.id,
          text: inputValue.trim(),
          url: null,
          timestamp: Firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
          setNewPhoto(null);
          setInputValue("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <from id="from">
      <Image
        className="icOpenGallery"
        onClick={() => {
          refInput.click();
        }}
      />
      <input
        ref={(el) => {
          refInput = el;
        }}
        className="viewInputGallery"
        accept="images/"
        type="file"
        onChange={onSelectImage}
      />
      <input
        className="viewInput mx-2"
        value={inputValue}
        placeholder="Type a message"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button className="sendButton" type="submit" onClick={onSendMessage}>
        <Send className="icSend" />
      </button>
    </from>
  );
}

export default ChatboxBottom;

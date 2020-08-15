import React, { useState } from "react";
import "./Profile.style.css";
import { TextField } from "@material-ui/core";
import ReactLoading from "react-loading";
import "react-toastify/dist/ReactToastify.css";
import LoginString from "../Login/LoginString";
import Avatar from "@material-ui/core/Avatar";
import firebase from "../../firebase/Config";

function Profile(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [newPhoto, setNewPhoto] = useState(null);

  const [documentKey, id, name, aboutMe, photoURL] = [
    localStorage.getItem(LoginString.FirebaseDocumentId),
    localStorage.getItem(LoginString.ID),
    localStorage.getItem(LoginString.Name),
    localStorage.getItem(LoginString.Description),
    localStorage.getItem(LoginString.PhotoURL),
  ];

  const [Name, setName] = useState(name);
  const [description, setDescription] = useState(aboutMe);
  const [newPhotoUrl, setNewPhotoUrl] = useState(photoURL);
  let refInput = null;

  const handleForm = () => {
    setIsLoading(true);
    if (newPhoto) {
      const uploadTask = firebase.storage().ref().child(id).put(newPhoto);
      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          setIsLoading(false);
          props.showToast(0, error.message);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURl) => {
            setIsLoading(false);
            console.log(downloadURl);
            updateUserInfo(true, downloadURl);
          });
        }
      );
    } else {
      setIsLoading(false);
      updateUserInfo(false, null);
    }
  };

  const updateUserInfo = (state, downloadURl) => {
    let userInfo;
    if (state) {
      userInfo = {
        name: Name,
        description: description,
        URL: downloadURl,
      };
    } else {
      userInfo = {
        name: Name,
        description: description,
      };
    }
    firebase
      .firestore()
      .collection("users")
      .doc(documentKey)
      .update(userInfo)
      .then((data) => {
        localStorage.setItem(LoginString.Name, Name);
        localStorage.setItem(LoginString.Description, description);
        if (state) {
          localStorage.setItem(LoginString.PhotoURL, downloadURl);
        }
        setIsLoading(false);
        props.showToast(1, "Successfully Updated");
      });
  };

  // Effect of selecting different images
  const onChangeAvatar = (e) => {
    if (e.target.files && e.target.files[0]) {
      if (e.target.files[0].type.toString().indexOf("image") !== 0) {
        props.showToast(0, "This file is not an image");
        return;
      }
      setNewPhoto(e.target.files[0]);
      setNewPhotoUrl(URL.createObjectURL(e.target.files[0]));
    } else {
      props.showToast(0, "Something wrong with image");
    }
  };

  return (
    <div className="container text-center">
      <h4>PROFILE</h4>
      <div className="change-image">
        {newPhotoUrl ? (
          <img
            className="imageInput"
            alt="icon gallery"
            src={newPhotoUrl}
            onClick={() => {
              refInput.click();
            }}
          />
        ) : (
          <Avatar
            className="avatar"
            alt={name}
            src="/static/images/avatar/1.jpg"
            onClick={() => {
              refInput.click();
            }}
          />
        )}
        <input
          ref={(el) => {
            refInput = el;
          }}
          accept="image/*"
          className="viewInputFile d-none"
          type="file"
          onChange={onChangeAvatar}
        />
        <p>You can change your profile picture by clicking on picture.</p>
      </div>
      <form className="col-md-6 mx-auto my-5">
        <TextField
          id="standard-basic"
          className="form-control mb-3"
          type="text"
          label="Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          id="standard-basic"
          className="form-control mb-3"
          type="text"
          value={aboutMe}
          onChange={(e) => setDescription(e.target.value)}
          label="About Me"
        />
        <button
          onClick={() => handleForm()}
          type="button"
          className=" btn btn-success mx-0 my-4"
        >
          Update
        </button>
        <button
          type="button"
          onClick={() => {
            props.history.push("/chat");
          }}
          className=" btn-md-lg btn btn-primary ml-md-4 ml-2"
        >
          Go Back
        </button>
      </form>
      {isLoading ? (
        <div>
          <ReactLoading
            type={"spin"}
            color={"#203152"}
            height={"3%"}
            width={"3%"}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Profile;

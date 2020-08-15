import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import LoginString from "../Login/LoginString";
import "./Login.style.css";
import firebase from "../../firebase/Config";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (users) => {
        let user = users.user;
        if (user) {
          await firebase
            .firestore()
            .collection("users")
            .where("id", "==", user.uid) // this Uid we have saved at the time of signup in our database
            .get()
            .then((docs) => {
              docs.forEach((doc) => {
                const currentData = doc.data();
                localStorage.setItem(LoginString.FirebaseDocumentId, doc.id);
                localStorage.setItem(LoginString.ID, currentData.id);
                localStorage.setItem(LoginString.Name, currentData.name);
                localStorage.setItem(LoginString.Email, currentData.email);
                localStorage.setItem(
                  LoginString.Password,
                  currentData.password
                );
                localStorage.setItem(LoginString.PhotoURL, currentData.URL);
                localStorage.setItem(
                  LoginString.Description,
                  currentData.description
                );
              });
            });
          props.history.push("./chat");
        }
      })
      .catch((error) => {
        document.getElementById("1").innerHTML = "Incorrect email or password";
      });
  };

  // Use then user close the browser without doing logout,
  // It will directly redirect him/her to the chat page
  useEffect(() => {
    if (localStorage.getItem(LoginString.ID)) {
      props.history.push("./chat");
    }
  }, []);

  return (
    <div className="text-center mx-auto login-form">
      <div className="">
        <div className="signup-header py-4 text-white">
          <h4>Welcome to Akash's live WebChat App</h4>
          <span>Please log in with your email and password </span>
          <div className="my-4">
            <Link to="/" className=" home-button btn-lg btn-success">
              Go back to Home
            </Link>
          </div>
        </div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="py-3 mx-auto col-md-6 col-11 signin-from"
        >
          <TextField
            id="standard-basic"
            className="form-control mb-3"
            name="email"
            type="email"
            required
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            id="standard-basic"
            className="form-control mb-3"
            name="password"
            type="password"
            required
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input className="my-3 p-2" name="remember" type="checkbox" />
          <label htmlFor="remember" className="mr-auto">
            Remember me
          </label>
          <p className="text-danger" id="1"></p>
          <button type="submit" className="signup-button">
            LOG IN
          </button>
          <p className="text-danger" id="1"></p>
          <div>
            <p>
              Didn't have a accout?{" "}
              <Link to="/signup" className="text-info">
                Sign Up
              </Link>{" "}
              here
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

import React from "react";
import { Route, Switch } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./App.css";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Chat from "./Pages/Chat/Chat";
import Profile from "./Pages/Profile/Profile";
import ChatboxPage from "./Pages/ChatboxPage/ChatboxPage";

function App() {
  function showToast(type, message) {
    switch (type) {
      case 0:
        toast.warning(message);
        break;
      case 1:
        toast.success(message);
        break;
      default:
        break;
    }
  }
  return (
    <div>
      <ToastContainer
        autoClose={2000}
        hideProgressBar={true}
        position={toast.POSITION.TOP_CENTER}
      />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          path="/login"
          render={(props) => <Login showToast={showToast} {...props} />}
        />
        <Route
          path="/signup"
          render={(props) => <SignUp showToast={showToast} {...props} />}
        />
        <Route
          path="/chat"
          render={(props) => <Chat showToast={showToast} {...props} />}
        />
        <Route
          path="/profile"
          render={(props) => <Profile showToast={showToast} {...props} />}
        />
        <Route path="/chatbox" render={(props) => <ChatboxPage {...props} />} />
      </Switch>
    </div>
  );
}

export default App;

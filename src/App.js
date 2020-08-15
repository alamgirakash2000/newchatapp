import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./App.css";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";

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
    <Router>
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
      </Switch>
    </Router>
  );
}

export default App;

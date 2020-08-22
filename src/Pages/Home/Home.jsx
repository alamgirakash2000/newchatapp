import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Home.style.css";

function Home() {
  return (
    <div>
      <Header />
      <div>
        <div className="container py-4">
          <div className="col-md-7 bg-light">
            <h3>About this App</h3>
            <p>
              This is an web based chatting where you can create an account and
              chatting with people using this app all over the world. You also
              can update your profile details here and your profile picture.
            </p>

            <h4>Features</h4>
            <p>
              After create your profile, you need to update your bio and profile
              picture by visiting the profile page. Now you only just be able to
              send message and images. I am working on it to add more features.
              You will get the update when it will be done. Happy visiting...
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

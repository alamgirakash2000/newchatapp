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
      <div className="about-me">
        <div className="container about-me">
          <h3 className="text-center">About Me</h3>
          <div className="col-md-7 d-flex">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/chatapp-by-akash.appspot.com/o/obnB3iqHV7hETOUOC4YArbHyb222?alt=media&token=8b3f34f3-eda2-41f7-9538-2918ab003a57"
              className="w-25 mr-2"
              alt=""
            />
            I am Md. Alamgir Hossain (Akash).Currently I am a student of
            Bangladesh University of Engineering and Technology (BUET) in the
            department of Electrical and Electronic Engineering. I am so
            interested in Web development and so passionate about this. My
            hometown is Bogura, Bangladesh. Currently living in Dhaka,
            Bangladesh.
          </div>
          <div className="col-md-5">
            <form></form>
          </div>
          <div>
            <h3 className="text-center">Get in touch</h3>
            <ul className="contactMe">
              <li>
                <a
                  target="_blank"
                  href="mailto:alamgirakash2000@gmail.com"
                  className="text-primary"
                >
                  <i class="fas fa-at fa-2x"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/alamgir.akash.522"
                  className="text-primary"
                >
                  <i class="fab fa-facebook fa-2x"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/md-alamgir-hossain-3765a71b1/"
                  className="text-info"
                >
                  <i class="fab fa-linkedin fa-2x"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/alamgirakash2000"
                  className="text-white"
                >
                  <i class="fab fa-github fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

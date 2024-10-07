import React from "react";
import Pic1 from "../assets/pic1.jpg";
import Pic2 from "../assets/pic2.jpg";
import "../Css/UserPage.css";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
// import Messaging from "../components/Messaging";

function UserPage(){

  return (
    <>
    <Header/>
      <div className="container">
        <div className="container__left">
          <h1>Psychonnect, there is a connection.</h1>
          <div className="container__btn">
          <button className="btn btn-secondary" type="submit">Start Short Assesment</button>
          </div>
        </div>
        <div className="container__right">
          <div className="images">
            <img src={Pic1} alt="pic1" className="tent-1" />
            <img src={Pic2} alt="pic2" className="tent-2" />
          </div>
          <div className="content">
            <h2>In Psychonnect,</h2>
            <h2>there is a connection.</h2>

            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
              accusantium. Natus nobis culpa esse velit deserunt quam
              repudiandae numquam nostrum!
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default UserPage;
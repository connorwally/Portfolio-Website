import React, { useState, useEffect } from 'react';
import '../assets/css/HomePage.css';
import Background1 from "@/assets/background/1.png";
import Background2 from "@/assets/background/2.png";
import Background3 from "@/assets/background/3.png";
import Background4 from "@/assets/background/4.png";
import Background5 from "@/assets/background/5.png";

import SmokeInFrontImage2 from "@/assets/background/2smokeinfront.png";
import MoonImage from "@/assets/background/moon.png";
import Smoke3 from "@/assets/background/3smoke.png";
import Smoke4 from "@/assets/background/4smoke.png";
import Smoke5 from "@/assets/background/5smoke.png";

import MobileBackgroundImage from "@/assets/images/mobile-background.png"

const HomePage = () => {
  const[xValue, setYValue] = useState(0);
  const[yValue, setXValue] = useState(0);

  const handleMouseMove = (e) => {
    const newXValue = e.clientX - window.innerWidth / 2;
    const newYValue = e.clientY - window.innerHeight / 2;
    setXValue(newXValue);
    setYValue(newYValue);
  };
  

  useEffect(() => {
    const parallax_el = document.querySelectorAll(".wally-games-opening-parallax .parallax");

    parallax_el.forEach((el) => {
      let speedx = el.dataset.speedx;
      let speedy = el.dataset.speedy;
      el.style.transform = `translateX(calc(-50% + ${
        -yValue * speedx
      }px)) translateY(calc(-50% + ${xValue * speedy}px))`;
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [xValue, yValue]);

  return(
    <div className="homepage">
      <div className="wally-games-opening-parallax">
        <img
          src={Background1}
          className="background-1"
          data-speedx="0"
          data-speedy="0"
        />
        <img
          src={Background2}
          className="parallax background-2"
          data-speedx="0.1"
          data-speedy="0"
        />
        <img
          src={SmokeInFrontImage2}
          className="background-smoke-1 parallax"
          data-speedx="0"
          data-speedy="0"
        />
        <img
          src={MoonImage}
          className="parallax background-3"
          id="test"
          data-speedx="0.065"
          data-speedy="0"
        />
        <div className="parallax text" data-speedx="0.15" data-speedy="0">
          <h1>CONNOR WALLIS</h1>
          <hr className='main-hr'/>
          <h2>GAME AND SOFTWARE DEV</h2>
        </div>
        <img
          src={Smoke3}
          className="background-smoke-2 parallax"
          data-speedx="0.06"
          data-speedy="0"
        />
        <img
          src={Background3}
          className="parallax background-4"
          data-speedx="0.05"
          data-speedy="0"
        />
        <img
          src={Smoke4}
          className="background-smoke-3 parallax"
          data-speedx="0.15"
          data-speedy="0"
        />
        <img
          src={Background4}
          className="parallax background-5"
          data-speedx="0.0325"
          data-speedy="0"
        />
        <img
          src={Smoke5}
          className="background-smoke-4 parallax"
          data-speedx="0.1"
          data-speedy="0"
        />
        <img
          src={Background5}
          className="parallax background-6"
          data-speedx="0.025"
          data-speedy="0"
        />
        <div className='black-fade'>
        </div>
      </div>
      <div className="home-page-mobile">
        <img className="background-image" src={MobileBackgroundImage}></img>
        <div className='info-panel'>
          <h5 className='title'>CONNOR WALLIS</h5>
          <hr className="title-hr"></hr>
          <h6 className="subtitle">GAME AND SOFTWARE DEV</h6>
        </div>
      </div>
      </div>
    );

  
};

export default HomePage;
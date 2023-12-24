import React, { useState, useEffect } from "react";
import InfoBar from "./InfoBar";
import BarLoader from "react-spinners/BarLoader";

// Im not sure if imports will work for the infoBar, but lets see.
import JavaImage from "@/assets/icons/Java.png";
import PythonImage from "@/assets/icons/Python.png";
import CSSImage from "@/assets/icons/css.png";
import CSharpImage from "@/assets/icons/CSHARP.png";
import ReactImage from "@/assets/icons/react.png";

export default function AboutContent(){

    const [infoBars, setInfoBars] = useState([
        {
        imageLink: './src/assets/icons/Music.png',
        altText: 'A musical note',
        Text: 'Fav. Music',
        Subtext: 'Drum & Bass + Rap',
        },
        {
        imageLink: './src/assets/icons/controller.png',
        altText: 'A controller',
        Text: 'Fav. Games',
        Subtext: 'Minecraft + Overwatch',
        },
        {
        imageLink: './src/assets/icons/home.png',
        altText: 'A house',
        Text: 'I\'m from',
        Subtext: 'Perth, Australia',
        },
        {
        imageLink: './src/assets/icons/universityproject.png',
        altText: 'An open book',
        Text: 'Studying',
        Subtext: 'Computer Science at UWA',
        },
        {
        imageLink: './src/assets/icons/coffee.png',
        altText: 'A coffee',
        Text: 'Addicted',
        Subtext: 'to Caffeine',
        },
        {
        imageLink: './src/assets/icons/cake.png',
        altText: 'A cake',
        Text: '23',
        Subtext: 'Years Old',
        }
    ]);
    const [infoBarIndex, setInfoBarIndex] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() => {
          setInfoBarIndex((prevIndex) =>
            prevIndex === infoBars.length - 1 ? 0 : prevIndex + 1
          );
        }, 4000); // Change every 5 seconds (adjust as needed)
    
        return () => clearInterval(intervalId); // Cleanup on component unmount
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [infoBarIndex]);


    return(
        <div className="about-content">
            <h1>ABOUT</h1>
            <hr className='small-hr'></hr>
            <p className='about-text'>I'm an <span className='about-span'>emerging</span> software engineer from <span className='about-span'>Australia</span>.</p>
            <br></br>
            <p className='about-text'>It's my <span className='about-span'>dream</span> to create  <span className='about-span'>innovative</span> software for people across the world.</p>
            <hr className='small-hr'></hr>
            <div className='about-images-container'>
                <div className='item'><img src={JavaImage}></img> <p>Java</p></div>
                <div className='item'><img src={PythonImage}></img> <p>Python</p></div>
                <div className='item'><img src={CSSImage}></img><p>CSS</p></div>
                <div className='item'><img src={CSharpImage}></img><p>C#</p></div>
                <div className='item'><img src={ReactImage}></img><p>React</p></div>
            </div>
            <hr className='small-hr'></hr>
            <InfoBar {...infoBars[infoBarIndex]} />
            <div className="bar-loader">
                <BarLoader color="#f2162b" loading="true" width={50} speedMultiplier={0.5} />
            </div>
        </div>
    );
}
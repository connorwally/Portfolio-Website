import ProjectsActive from "../components/ProjectsActive";
import ProjectBar from "./ProjectBar";
import ProjectViewMobile from "./ProjectViewMobile";
import React, {useState} from 'react';

import MinecraftImage from "@/assets/icons/minecraft.png";
import ReactImage from "@/assets/icons/reactlogo.png";
import MarioImage from "@/assets/icons/mario.png";
import UnityImage from "@/assets/icons/unity.png";
import ChatGPTImage from "@/assets/icons/chatgpt.png";

import MinecraftRedImage from "@/assets/icons/minecraft_red.png";
import ReactRedImage from "@/assets/icons/React.png";
import PythonRedImage from "@/assets/icons/Python.png";
import CSharpImage from "@/assets/icons/CSHARP.png";
import CSSImage from "@/assets/icons/CSS.png";




export default function ProjectsPanel(){

    const [hoveredProject, setHoveredProject] = useState(null);
    const [selectedProject, setSelectedProject] = useState(0);

    const handleMouseEnter=(projectId)=>{
        console.log(projectId);
        setHoveredProject(projectId);
    }

    const handleMouseLeave=()=>{
        setHoveredProject(null);
    }

    const handleProjectClick = (projectId) => {
        console.log(projectId);
        setSelectedProject(projectId);
    }


    return(
        <div className="projects-panel">
            <ProjectsActive
            activeProject={selectedProject} ></ProjectsActive>
            <div className='projects-list'>
                <ProjectBar 
                className='project-bar'
                imageLink={MinecraftImage}
                altText='Minecraft Logo'
                Text='MINECRAFT RPG'
                Subtext='Java Project'
                isHighlighted={selectedProject === 0}
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleProjectClick(0)}
                />
                {hoveredProject != 0 && hoveredProject != 1 && selectedProject != 1 && selectedProject != 0 && <hr className='big-hr'></hr>}
                <ProjectBar
                id='1'
                className='project-bar'
                imageLink={ReactImage}
                altText='React Logo'
                Text='PORTFOLIO WEBSITE'
                Subtext='React + Node'
                isHighlighted={selectedProject === 1}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleProjectClick(1)}
                />
                {hoveredProject != 1 && hoveredProject != 2 && selectedProject != 1 && selectedProject != 2 && <hr className='big-hr'></hr>}
                <ProjectBar
                id='2'
                className='project-bar'
                imageLink={MarioImage}
                altText='Mario Sprite'
                Text='DEEP LEARNING AI'
                Subtext='Python + SB3'
                isHighlighted={selectedProject === 2}
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleProjectClick(2)}
                />
                {hoveredProject != 2 && hoveredProject != 3 && selectedProject != 2 && selectedProject != 3 && <hr className='big-hr'></hr>}
                <ProjectBar
                id='3'
                className='project-bar'
                imageLink={UnityImage}
                altText='Unity Logo'
                Text='UNITY MMORPG'
                Subtext='C# + Mirror'
                isHighlighted={selectedProject === 3}
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleProjectClick(3)}
                />
                {hoveredProject != 3 && hoveredProject != 4 && selectedProject != 3 && selectedProject != 4 && <hr className='big-hr'></hr>}
                <ProjectBar
                id='4'
                className='project-bar'
                imageLink={ChatGPTImage}
                altText='ChatGPT Logo'
                Text='CHATGPT CLONE'
                Subtext='CSS + Mirror'
                isHighlighted={selectedProject === 4}
                onMouseEnter={() => handleMouseEnter(4)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleProjectClick(4)}
                />
            </div>
            <div className="projects-mobile"> 
                <ProjectViewMobile
                title='MINECRAFT RPG'
                tools='Java'
                text='I extensively modded Minecraft using the Bukkit and PaperSpigot API’s to create a multiplayer RPG experience.'
                imageLink={MinecraftRedImage}
                />
                <ProjectViewMobile
                title='PORTFOLIO SITE'
                tools='React'
                text='I built this website as a step into web development. I utilised AI tools such as Midjourney to create the graphics and Figma for the UI/UX.'
                imageLink={ReactRedImage}
                />
                <ProjectViewMobile
                title='DEEP LEARNING AI'
                tools='Python'
                text='I built a reinforcement learning agent using PPO from Stable Baselines3. The agent was trained on Super Mario Bros. gym and had great results.'
                imageLink={PythonRedImage}
                />
                <ProjectViewMobile
                title='UNITY MMO'
                tools='C#'
                text='I’m currently developing a 2D MMORPG game in Unity using the Mirror networking framework.'
                imageLink={CSharpImage}
                />
                <ProjectViewMobile
                title='CHATGPT CLONE'
                tools='CSS'
                text='My university project group were tasked with creating a clone of the AI chatbot ChatGPT. We used HTML, CSS, Flask and MySQL to achieve this.'
                imageLink={CSSImage}
                />
            </div>
        </div>
    );
}
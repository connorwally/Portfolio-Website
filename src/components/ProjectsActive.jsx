import InfoBar from "./InfoBar";
import ProjectView from "./ProjectView";

import MinecraftRPGImage from "@/assets/images/ProjectActiveImage.png"
import ReactCodingImage from "@/assets/images/ReactCodingImage.png"
import MarioAIImage from "@/assets/images/MarioAIImage.png"
import UnityMMOImage from "@/assets/images/UnityMMOMap.png"
import ChatGPTImage from "@/assets/images/ChatGPTCloneWebsite.png"

export default function ProjectsActive({activeProject}){
    
    const activeProjectID = activeProject;

    return(
        <div className="active-project">
            {(activeProjectID == 0 || activeProjectID == null)&& 
                <ProjectView
                title='MINECRAFT RPG'
                tools='Java + Config + External Tools'
                text='I am building a fully fledged RPG Minecraft server with classes, dungeons, base-upgrading, quests and much more.'
                >
                <InfoBar
                    imageLink='.\src\assets\icons\Sword.png'
                    altText='Image of a sword'
                    Text='4 Classes'
                    Subtext='w/ Unique Spells'
                    />
                <InfoBar
                    imageLink='.\src\assets\icons\Shield.png'
                    altText='Image of a shield'
                    Text='100+'
                    Subtext='Custom Items'
                    />
                <InfoBar
                    imageLink='.\src\assets\icons\Hourglass.png'
                    altText='Image of an hourglass'
                    Text='1000+'
                    Subtext='Hours of Work'
                    />
                <InfoBar
                    imageLink='.\src\assets\icons\CompletionCircle.png'
                    altText='Image of a circle indicating completion'
                    Text='80%'
                    Subtext='Complete'
                    className='completion'
                    />
                </ProjectView>
            }

            {activeProjectID == 1 && 
                <ProjectView
                title='PORTFOLIO WEBSITE'
                tools='React + Node + MidJourney'
                text='I built this website as my step into the world of React and Node. I also wanted to trial some new AI tools such as ChatGPT and Github Copilot.'
                >
                <InfoBar
                    imageLink='.\src\assets\icons\Summer.png'
                    altText='Image of a sun'
                    Text='A summer'
                    Subtext='React Project'
                    />
                <InfoBar
                    imageLink='.\src\assets\icons\Paintbrush.png'
                    altText='Image of a paintbrush'
                    Text='Figma'
                    Subtext='Designed'
                    />
                <InfoBar
                    imageLink='.\src\assets\icons\ImageEditing.png'
                    altText='Image of an image'
                    Text='Image'
                    Subtext='Editing'
                    />
                <InfoBar
                    imageLink='.\src\assets\icons\Parallax.png'
                    altText='Image of some codes'
                    Text='Parallax'
                    Subtext='Done by hand'
                    className='completion'
                    />
                </ProjectView>
            }
            
            {activeProjectID == 2 && 
                <ProjectView
                title='DEEP LEARNING AI'
                tools='Python + Stable Baselines 3'
                text='I built a reinforcement learning agent using PPO from Stable Baselines3. The agent was trained on Super Mario Bros. gym and had great results.'
                >
                <InfoBar
                    imageLink='.\src\assets\icons\Checkmark.png'
                    altText='Image of a checkmark'
                    Text='Completes'
                    Subtext='World 1-1+'
                    />
                <InfoBar
                    imageLink='.\src\assets\icons\PPOAlgorithm.png'
                    altText='Image of a brain and a cog wheel'
                    Text='PPO'
                    Subtext='Algorithm'
                    />
                <InfoBar
                    imageLink='.\src\assets\icons\UniversityProject.png'
                    altText='Image of a book'
                    Text='University'
                    Subtext='Project'
                    />
                <InfoBar
                    imageLink='.\src\assets\icons\CNNPolicy.png'
                    altText='Image of a circle indicating completion'
                    Text='CNN'
                    Subtext='Policy'
                    />
                </ProjectView>
            }
            
            {activeProjectID == 3 && 
                <ProjectView
                title='UNITY MMORPG'
                tools='C# + Unity + Mirror Networking'
                text='I am currently developing a 2D MMORPG in Unity using the Mirror Networking library. More details to come as the project progresses.'
                >
                <InfoBar
                    imageLink='.\src\assets\icons\uMMORPG.png'
                    altText='Image of a sword and shield'
                    Text='uMMORPG'
                    Subtext='Asset Pack'
                    />
                <InfoBar
                    imageLink='.\src\assets\icons\Paintbrush.png'
                    altText='Image of a paintbrush'
                    Text='Art by'
                    Subtext='AnalogStudios_'
                    />
                <InfoBar
                    imageLink='.\src\assets\icons\EarlyIn.png'
                    altText='Image of a clock'
                    Text='Early in'
                    Subtext='Development'
                    />
                <InfoBar
                    imageLink='.\src\assets\icons\Networking.png'
                    altText='Image of connection signal bars'
                    Text='Networking'
                    Subtext='With mirror'
                    />
                </ProjectView>
            }
            
            {activeProjectID == 4 && 
                <ProjectView
                title='CHATGPT CLONE'
                tools='HTML + CSS + Flask + MySQL'
                text='My university project group were tasked with creating a clone of the AI chatbot ChatGPT. We used HTML, CSS, Flask and MySQL to achieve this.'
                >
                <InfoBar
                    imageLink='.\src\assets\icons\Python50.png'
                    altText='Image of python'
                    Text='Python'
                    Subtext='Backend'
                    />
                <InfoBar
                    imageLink='.\src\assets\icons\JS50.png'
                    altText='Image of javascript logo'
                    Text='JS'
                    Subtext='Frontend'
                    />
                <InfoBar
                    imageLink='.\src\assets\icons\UniversityProject.png'
                    altText='Image of an hourglass'
                    Text='University'
                    Subtext='Project'
                    />
                <InfoBar
                    imageLink='.\src\assets\icons\API.png'
                    altText='Image of the letters API'
                    Text='API'
                    Subtext='Usage'
                    />
                </ProjectView>
            }
            <div className="activeProjectImage">
            {activeProjectID == 0 && 
            <div className='image'>
                <img src={MinecraftRPGImage} alt="" />
            </div>}

            {activeProjectID == 1 && 
            <div className='image'>
                <img src={ReactCodingImage} alt="" />
            </div>}

            {activeProjectID == 2 && 
            <div className='image'>
                <img src={MarioAIImage} alt="" />
            </div>}

            {activeProjectID == 3 && 
            <div className='image'>
                <img src={UnityMMOImage} alt="" />
            </div>}

            {activeProjectID == 4 && 
            <div className='image'>
                <img src={ChatGPTImage} alt="" />
            </div>}
            </div>

        </div>
    );
}
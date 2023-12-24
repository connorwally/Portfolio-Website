import AboutContent from "../components/AboutContent.jsx"
import ProjectsImage from "@/assets/images/Projects Image.png";

export default function AboutPage(){
    return(
        <div className="about-panel">
            <AboutContent></AboutContent>
            <div className="about-image">
                <img src={ProjectsImage} alt="" />
            </div>
        </div>
    );
}
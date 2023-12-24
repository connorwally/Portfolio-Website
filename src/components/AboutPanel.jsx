import AboutContent from "../components/AboutContent.jsx"

export default function AboutPage(){
    return(
        <div className="about-panel">
            <AboutContent></AboutContent>
            <div className="about-image">
                <img src='.\src\assets\images\Projects Image.png' alt="" />
            </div>
        </div>
    );
}
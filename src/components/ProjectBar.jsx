
export default function ProjectBar({imageLink, altText, Text, Subtext, onMouseEnter, onMouseLeave, onClick, isHighlighted}){

    const barClass = isHighlighted ? `highlighted` : ``;

    return(
        <div 
            className={`project-bar ${barClass}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        >
            <img className='arrow' src='.\src\assets\icons\Arrow.png'alt='An arrow'/>
            <div className='info'>
                <div className='text'><h2>{Text}</h2><p>{Subtext}</p></div>
                <img className='image' src={imageLink} alt={altText}/>
            </div>
        </div>
    );
}
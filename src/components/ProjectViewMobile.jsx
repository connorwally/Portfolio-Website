export default function ProjectViewMobile({title, tools, text, imageLink, altText}){


    return(
        <div className='project-view-mobile'>
            <div className="top">
                <img className="image" width="50px" height="50px" src={imageLink} alt={altText}></img>
                <div className="text">
                    <ul>
                        <li>
                            <a className="title">{title}</a>
                        </li>
                        <li>
                            <a className="tools">{tools}</a>
                        </li>
                    </ul>
                </div>
            </div>
        <hr></hr>
        <p className='text'>{text}</p>
        </div>
    );
}
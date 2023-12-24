export default function LinkCircle({imageLink, altText, websiteLink}){


    return(
        <div className="link-circle">
            <a href={websiteLink} target="_blank" rel="noopener noreferrer">
                <img src={imageLink} alt={altText}/>
            </a>
        </div>
    );
}
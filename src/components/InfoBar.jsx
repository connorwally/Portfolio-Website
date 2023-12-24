export default function InfoBar({imageLink, altText, Text, Subtext}){


    return(
        <div className="info-bar">
            <img className='image' src={imageLink} alt={altText}/>
            <div className='text'><h2>{Text}</h2><p>{Subtext}</p></div>
        </div>
    );
}
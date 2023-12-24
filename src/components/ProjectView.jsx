/* <div className="active-project">
{activeProjectID == 0 && <div className='minecraft'>
    <h1>MINECRAFT RPG</h1>
    <h3>Java + Config + External Tools</h3>
    <hr className='small-hr'></hr>
    <p>I am building a fully fledged RPG Minecraft server with classes, dungeons, base-upgrading, quests and much more.</p>
    <hr className='small-hr'></hr>
    <div className='stats'>
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
    </div>
</div>} */

export default function ProjectView({title, tools, text, children}){


    return(
        <div className='Project-View'>
        <h1 className="title">{title}</h1>
        <h3 className="tools">{tools}</h3>
        <hr className='small-hr'></hr>
        <p className='text'>{text}</p>
        <hr className='small-hr'></hr>
        <div className='stats'>
            {/* <InfoBar
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
                /> */}
            {children}
        </div>
        </div>
    );
}
import LinkCircle from './LinkCircle';

export default function FixedLinksTop(){


    return(
        <div className="fixed-links-top">
            <LinkCircle
            className="github-link"
            imageLink=".\src\assets\icons\Github.png"
            altText="Github Logo"
            websiteLink="https://github.com/connorwally"
        />
        <LinkCircle
          className="linkedin-link"
          imageLink=".\src\assets\icons\LinkedIn.png"
          altText="LinkedIn Logo"
          websiteLink="https://www.linkedin.com/in/connor-wallis"
        />
        </div>
    );
}
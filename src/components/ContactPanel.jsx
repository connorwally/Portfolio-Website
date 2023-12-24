import '../assets/css/Contact.css'
import React, {useRef, useState} from 'react';
import BarLoader from "react-spinners/BarLoader";
import FixedLinksBottom from './FixedLinksBottom';

export default function ContactPanel(){   
    
    const [loading, setLoading] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    
    const formRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        setSubmitting(true);

        // send email
        emailjs.sendForm('service_4ixlogd', 'template_10zjsla', formRef.current)
            .then(() => {
                console.log('SUCCESS!');
                setLoading(false);
            }, (error) => {
                console.log('FAILED...', error);
                setLoading(false);
            });
    };


    return(
        <div className="contact-panel">
            <div className="left-panel">
                <img className='moon' src='.\src\assets\images\MoonGraphic.png'/>
                <div className="text">
                    <div className="left">
                        <p >Enquire about anything</p>
                    </div>
                    <hr className='red-big-hr'></hr>
                    <div className="right">
                        <p>Let's have a chat</p>
                    </div>
                </div>
            </div>
            <div className="right-panel">
                <h4>CONTACT</h4>
                <hr className='small-hr'></hr>
                <form id="contact-form" ref={formRef} onSubmit={handleSubmit}>
                    <div className='names'>
                        <input className='selectable' type="text" id="fname" name="firstname" placeholder="First name"/>
                        <input className='selectable' type="text" id="lname" name="lastname" placeholder="Last name"/>
                    </div>
                    <div>
                        <input className='selectable' type="email" id="email" name="email" placeholder="Email"/>
                    </div>
                    <div>
                        <input className='selectable' type="text" id="subject" name="subject" placeholder="Subject"/>
                    </div>
                    <div className='message-wrapper'>
                        <textarea className='selectable' id="message" name="message" placeholder="Message..."/>
                        {!submitting && <button type="submit">Send</button>}
                        {loading && <div className="loading"><BarLoader color="#f2162b" loading="true" width={630} speedMultiplier={0.25}/></div>}
                        {submitting && !loading && <div className="submitted"><p>Sent!</p></div>}
                    </div>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/connor-wallis/" target="_blank"><img className='linkedin link' src='.\src\assets\icons\LinkedIn.png'/></a>
                        <a href="https://github.com/connorwally" target="_blank"><img className='github link' src='.\src\assets\icons\Github.png'/></a></div>
                </form>
            </div>
        </div>
    );
}
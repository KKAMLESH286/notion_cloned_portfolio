import './contact.css';
import  facebook from './facebook.png';
import  instagram from './instagram.png';
import  twitter from './twitter.png';
import  quora from './quora.png';
import  github from './github.png';

import  linkedin from './linkedin.png';




function Contact(){
    return (
        <div className="Card-column">
        <div className="Card-row">
        <div className="Card">
        <div className="Card-row-second">
        <img src={linkedin} className="Icon-image" alt="logo" />
            <a href="https://www.linkedin.com/in/kkamlesh286/">Linkedin</a>
            </div>
        </div>
        <div className="Card">
        <div className="Card-row-second">
        <img src={twitter} className="Icon-image" alt="logo" />
            <a href="https://www.twitter.com/kkamlesh286/">twitter</a>
            </div>
        </div>
        <div className="Card">
        <div className="Card-row-second">
        <img src={github} className="Icon-image" alt="logo" />
            <a href="https://www.github.com/kkamlesh286/">github</a>
            </div>
        </div>

        
        </div>
        &nbsp;
        &nbsp;
        <div className="Card-row">
        <div className="Card">
            <div className="Card-row-second">
        <img src={facebook} className="Icon-image" alt="logo" />
            <a href="https://www.facebook.com/kkamlesh286/">Facebook</a>
            </div>
        </div>
        <div className="Card">
        <div className="Card-row-second">
        <img src={instagram} className="Icon-image" alt="logo" />
            <a href="https://www.instagram.com/kkamlesh286/">instagram</a>
            </div>
        </div>
        <div className="Card">
        <div className="Card-row-second">
        <img src={quora} className="Icon-image" alt="logo" />
            <a href="https://www.quora.com/kkamlesh286/">quora</a>
            </div>
        </div>
        </div>
        </div>
    )
}
export default Contact;
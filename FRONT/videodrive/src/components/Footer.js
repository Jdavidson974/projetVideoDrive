import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="blocGauche">
                <Link to={'/'} className="w-100" >Mention Légale</Link>
                <Link to={'/'} className="w-100" >Contact</Link>
                <Link to={'/'} className="w-100" >Horaires</Link>
            </div>
            <div className="blocDroit">
                <div className="w-100 install-container d-flex justify-content-end">
                    <span >Install app</span>
                </div>
                <div className="img-container">
                    <img src="img/downloadApp.png" height="80px" />
                </div>
            </div>
            <div className="separator"></div>
            <div className="copyright">
                © Copyright 2022, All Rights Reserved by ClarityUI
            </div>
            <div className="social-link">
                <div className="social-logo-container">
                    <img src="/img/facebook.png" alt="" />
                    <img src="/img/insta.png" alt="" />
                    <img src="/img/twitter.png" alt="" />
                    <img src="/img/github.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
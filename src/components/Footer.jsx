import "../style/footer.css";

const Footer = () => {
    return (
        <div className="footer-main-container">
            <div className="footer-container">
                <div className="text-container">
                    <h1>Say hello!</h1>
                    <p>ishanilimbkar@gmail.com</p>
                    <p>+91 8097823058</p>
                </div>
                <div className="link-container">
                    <p className="where-to-next">Where to next?</p>
                    <div className="blue-row">
                        <a href="#">Let's plan it<span>&#10230;</span></a>
                    </div>
                </div>
            </div>
            <p className="footer-paragraph">
                Designed by Udyami Tech, a web development company led by young rural women, 
                who's innovative approach and dedication is push technological boundaries with every line of code.
            </p>
        </div>
    );
};

export default Footer;

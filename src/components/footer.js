import "./styles/footer.css"

function Footer(){
    return(
        <footer className="footer">
            <div className="container">
                <h1 class="logo2">Shoester</h1>
            </div>
            <div className="About-Us">  
                <ul class="about-list">
                <p id="aboutpara">About</p>
                    <li>FAQ</li>
                    <li>News</li>
                    <li>Policy</li>
                </ul>
            </div>
            <div className="Contact">  
                <ul class="contact-list">
                    <p id="contactpara">Contact</p>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Youtube</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
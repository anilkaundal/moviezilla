export default function Footer() {
    return (<footer>
        <nav className="footer-inner">
            <section className="footer-item">
                <h1>MovieZilla</h1>
                <h2>Movies around the world.</h2>
            </section>

            <section className="footer-item">
                <h3>Explore</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">More</a></li>
                </ul>
            </section>

            <section className="footer-item">
                <h3>Visit</h3>
                <a>
                    <p>ABC Road, Shimla</p>
                    <p>Himachal Pradesh</p>
                </a>

                <h3 className="desktop">Contact / Business</h3>
                <p className="desktop"><a>injuriousanswer@gmail.com</a></p>
                <p className="desktop"><a>+91 99999-55555</a></p>
            </section>

            <section className="footer-item">
                <h3>Contact / Business</h3>
                <p><a>injuriousanswer@gmail.com</a></p>
                <p><a>+91 99999-55555</a></p>
            </section>

            <section className="footer-item">
                <h3>Follow</h3>
                <ul>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">LinkedIn</a></li>
                </ul>
            </section>

            <section className="footer-item">
                <h3>Legal</h3>
                <ul>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Privacy</a></li>
                </ul>
            </section>

            <section className="footer-item">
                <a href="#" className="footer-button">More About Us</a>
            </section>
        </nav>
    </footer>)
}
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner container">

                <ul className="footer__contacts">
                    <li>
                        <Link className="footer__logo-link" to="/">Web<span>Studio</span></Link>
                    </li>
                    <li>
                        <a className="footer__address-link" href="https://goo.gl/maps/ceR9nBu1ngvzuz5S7" target="_blank"
                           rel="noopener noreferrer">г. Киев, пр-т Леси Украинки, 26</a>
                    </li>
                    <li>
                        <a className="footer__mail-link" href="mailto:">info@devstudio.com</a>
                    </li>
                    <li>
                        <a className="footer__phone-link" href="tel:+380961111111">+38 096 111 11 11</a>
                    </li>

                </ul>
                <div className="footer__social">
                    <div className="h4__social">присоединяйтесь</div>
                    <div className="footer__social-links">
                        <a href="https://www.instagram.com/">
                            <svg className="footer__social-icon">
                                <use xlinkHref={'/images/symbol.svg#icon__instagram'}></use>
                            </svg>
                        </a>
                        <a href="https://twitter.com/">
                            <svg className="footer__social-icon">
                                <use xlinkHref="/images/symbol.svg#icon__twitter"></use>
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/">
                            <svg className="footer__social-icon">
                                <use xlinkHref="/images/symbol.svg#icon__facebook"></use>
                            </svg>
                        </a>
                        <a href="https://ua.linkedin.com/">
                            <svg className="footer__social-icon">
                                <use xlinkHref="/images/symbol.svg#icon__linkedin"></use>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="footer__subscribe">
                    <div className="h4__subscribe h4__social">Подпишитесь на рассылку</div>
                    <form className="subscribe__box" action="#" method="get">
                        <input className="subscribe__input" type="email" placeholder="E-mail"/>
                        <button className="subscribe__submit" type="submit">Подписаться</button>
                    </form>
                </div>
            </div>
        </footer>
    )
}

export default Footer
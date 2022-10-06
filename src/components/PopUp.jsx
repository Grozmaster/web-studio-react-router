import {useState} from "react";
import {Link} from "react-router-dom";

function PopUp({isPopUp}){


    return(
        <div className={`popup ${isPopUp} container`}>
            <div className="popup__inner">
                <ul className="menu__list">
                    <li className="menu__list-item"><Link to ="/">Студия</Link></li>
                    <li className="menu__list-item"><Link to ="/portfolio">Портфолио</Link></li>
                    <li className="menu__list-item"><Link to ="/contacts">Контакты</Link></li>
                </ul>
                <div className="popup_bottom">
                    <div className="popup__contacts">
                        <div className="popup__contacts-phone">
                            <a className="popup__phone" href="tel:+380961111111">+38 096 111 11 11</a>
                        </div>
                        <div className="popup__contacts-mail">
                            <a className="popup__mail" href="mailto:">info@devstudio.com</a>
                        </div>
                    </div>

                    <div className="popup__social">
                        <ul className="popup__social-list">
                            <li className="popup__social-item">
                                <a href="https://www.instagram.com/" target="_blank"
                                   rel="noopener noreferrer">Instagram</a>
                            </li>
                            <li>
                                <hr className="item__line"/>
                            </li>
                            <li className="popup__social-item">
                                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
                            </li>
                            <li>
                                <hr className="item__line"/>
                            </li>
                            <li className="popup__social-item">
                                <a href="https://www.facebook.com/" target="_blank"
                                   rel="noopener noreferrer">Facebook</a>
                            </li>
                            <li>
                                <hr className="item__line"/>
                            </li>
                            <li className="popup__social-item">
                                <a href="https://www.linkedin.com/" target="_blank"
                                   rel="noopener noreferrer">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUp
import {Link} from "react-router-dom";
import {useState} from "react";
import PopUp from "./PopUp";

function Header(){

    const[isPopUp,setIsPopUp] = useState('')
    const changePopUp =()=>{
        if(isPopUp===''){
            setIsPopUp('active')
        }else setIsPopUp('')

    }

    return(
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                         <Link className="logo-link" to="/">Web<span>Studio</span></Link>
                    </div>
                    <nav className="header_menu">
                        <ul className="menu__list">
                            <li className="menu__list-item"><Link to ="/">Студия</Link></li>
                            <li className="menu__list-item"><Link to ="/portfolio">Портфолио</Link></li>
                            <li className="menu__list-item"><Link to ="/contacts">Контакты</Link></li>
                        </ul>
                    </nav>
                    <div className="header__contacts">
                        <div className="header__contacts--mail">
                            <a href="mailto:"><img className="mail-icon" src="images/mail.svg" alt="mail-icon"/>
                            </a>

                            <a className="header__mail" href="mailto:">info@devstudio.com</a>
                        </div>
                        <div className="header__contacts--phone">
                            <a href="tel:+380961111111"><img className="phone-icon" src="images/smartphone.svg"
                                                             alt="phone-icon"/>
                            </a>

                            <a className="header__phone" href="tel:+380961111111">+38 096 111 11 11</a>
                        </div>
                    </div>
                    <div className="mobile__menu">
                        <img onClick={changePopUp} className="mobile__menu--img" src="/images/menu.svg" alt="mobile__menu"/>
                    </div>
                </div>

            </div>
            <PopUp isPopUp={isPopUp}/>
        </header>
    )
}
export default Header
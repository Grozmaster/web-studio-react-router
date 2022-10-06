
function Main(){
    return(
        <main className="main">
            <div className="top__banner">
                <div className="banner__inner">
                    <h2 className="top__banner-text">Эффективные решения<br/> для вашего бизнеса</h2>
                    <button className="order__btn">Заказать услугу</button>
                </div>
            </div>

            <section className="Benefits__section container">
                <div className="Benefits">
                    <div className="Benefits__blocks-left">
                        <div className="Benefits__info-left">
                            <div className="img__box">
                                <img src='/images/benifit-1.svg' alt="Benefits"/>
                            </div>
                            <h3 className="Benefits__title">Внимание к деталям</h3>
                            <p className="Benefits__text">Идейные соображения, а также начало повседневной работы по
                                формированию позиции.</p>
                        </div>
                        <div className="Benefits__info-left">
                            <div className="img__box">
                                <img src="/images/benifit-2.svg" alt="Benefits"/>
                            </div>
                            <h3 className="Benefits__title">Пунктуальность</h3>
                            <p className="Benefits__text">Задача организации, в особенности же рамки и место обучения
                                кадров
                                влечет за собой.</p>
                        </div>
                    </div>
                    <div className="Benefits__blocks-right">
                        <div className="Benefits__info-right">
                            <div className="img__box">
                                <img src="/images/benifit-3.svg" alt="Benefits"/>
                            </div>
                            <h3 className="Benefits__title">Планирование</h3>
                            <p className="Benefits__text">Равным образом консультация с широким активом в значительной
                                степени
                                обуславливает.</p>
                        </div>
                        <div className="Benefits__info-right">
                            <div className="img__box">
                                <img src="/images/benifit-4.svg" alt="Benefits"/>
                            </div>
                            <h3 className="Benefits__title">Современные технологии</h3>
                            <p className="Benefits__text">Значимость этих проблем настолько очевидна, что реализация
                                плановых
                                заданий.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="skills container">
                <div className="skills__inner">
                    <h3 className="skills__title">Чем мы занимаемся</h3>
                    <div className="skills__box">
                        <div className="skills__item">
                            <div className="skills__overlay">
                                <h4 className="skills__overlay--title">Десктопные приложения</h4>
                            </div>
                            <img src="/images/skills-1.jpg" alt="skills"/>
                        </div>
                        <div className="skills__item">
                            <div className="skills__overlay">
                                <h4 className="skills__overlay--title">Мобильные приложения</h4>
                            </div>
                            <img src="/images/skills-2.jpg" alt="skills"/>
                        </div>
                        <div className="skills__item">
                            <div className="skills__overlay">
                                <h4 className="skills__overlay--title">Дизайнерские решения</h4>
                            </div>
                            <img src="/images/skills-3.jpg" alt="skills"/>
                        </div>
                    </div>
                </div>
            </section>


            <section className="ourteam">
                <div className="ourteam__inner container">
                    <h3 className="ourteam__title">Наша команда</h3>
                    <div className="ourteam__box">
                        <div className="ourteam__item">
                            <img src="/images/team-1.jpg" alt="Игорь Демьяненко"/>
                                <h4 className="ourteam__name">Игорь Демьяненко</h4>
                                <h5 className="ourteam__profession">Product Designer</h5>
                                <div className="social__links">
                                    <a href="#">
                                        <svg className="icon">
                                            <use xlinkHref="/images/symbol.svg#icon__instagram"></use>
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg className="icon">
                                            <use xlinkHref="/images/symbol.svg#icon__twitter"></use>
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg className="icon">
                                            <use xlinkHref="/images/symbol.svg#icon__facebook"></use>
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg className="icon">
                                            <use xlinkHref="/images/symbol.svg#icon__linkedin"></use>
                                        </svg>
                                    </a>
                                </div>
                        </div>
                        <div className="ourteam__item">
                            <img src="/images/team-2.jpg" alt="Ольга Репина"/>
                                <h4 className="ourteam__name">Ольга Репина</h4>
                                <h5 className="ourteam__profession">Frontend Developer</h5>
                                <div className="social__links">
                                    <a href="#">
                                        <svg className="icon">
                                            <use xlinkHref="/images/symbol.svg#icon__instagram"></use>
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg className="icon">
                                            <use xlinkHref="/images/symbol.svg#icon__twitter"></use>
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg className="icon">
                                            <use xlinkHref="/images/symbol.svg#icon__facebook"></use>
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg className="icon">
                                            <use xlinkHref="/images/symbol.svg#icon__linkedin"></use>
                                        </svg>
                                    </a>
                                </div>
                        </div>
                        <div className="ourteam__item">
                            <img src="/images/team-3.jpg" alt="Николай Тарасов"/>
                                <h4 className="ourteam__name">Николай Тарасов</h4>
                                <h5 className="ourteam__profession">Marketing</h5>
                                <div className="social__links">
                                    <a href="#">
                                        <svg className="icon">
                                            <use xlinkHref="/images/symbol.svg#icon__instagram"></use>
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg className="icon">
                                            <use xlinkHref="/images/symbol.svg#icon__twitter"></use>
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg className="icon">
                                            <use xlinkHref="/images/symbol.svg#icon__facebook"></use>
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg className="icon">
                                            <use xlinkHref="/images/symbol.svg#icon__linkedin"></use>
                                        </svg>
                                    </a>
                                </div>
                        </div>
                        <div className="ourteam__item">
                            <img src="/images/team-4.jpg" alt="Михаил Ермаков"/>
                                <h4 className="ourteam__name">Михаил Ермаков</h4>
                                <h5 className="ourteam__profession">UI Designer</h5>
                                <div className="social__links">
                                    <a href="#">
                                        <svg className="icon">
                                            <use xlinkHref="/images/symbol.svg#icon__instagram"></use>
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg className="icon">
                                            <use xlinkHref="/images/symbol.svg#icon__twitter"></use>
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg className="icon">
                                            <use xlinkHref="/images/symbol.svg#icon__facebook"></use>
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg className="icon">
                                            <use xlinkHref="/images/symbol.svg#icon__linkedin"></use>
                                        </svg>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="customers container">
                <div className="customers__inner">
                    <h3 className="customers__title">Постоянные клиенты</h3>
                    <div className="customers__box">
                        <div className="customers__items">
                            <a href="#">
                                <div className="customer__icon">
                                    <div className="icon__inner">
                                        <svg>
                                            <use xlinkHref="/images/symbol.svg#icon__client-1"></use>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div className="customer__icon">
                                    <div className="icon__inner">
                                        <svg>
                                            <use xlinkHref="/images/symbol.svg#icon__client-2"></use>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div className="customer__icon">
                                    <div className="icon__inner">
                                        <svg>
                                            <use xlinkHref="/images/symbol.svg#icon__client-3"></use>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div className="customer__icon">
                                    <div className="icon__inner">
                                        <svg>
                                            <use xlinkHref="/images/symbol.svg#icon__client-4"></use>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div className="customer__icon">
                                    <div className="icon__inner">
                                        <svg>
                                            <use xlinkHref="/images/symbol.svg#icon__client-5"></use>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div className="customer__icon">
                                    <div className="icon__inner">
                                        <svg>
                                            <use xlinkHref="/images/symbol.svg#icon__client-6"></use>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Main
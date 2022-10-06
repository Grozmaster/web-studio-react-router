import {useState} from "react";

function OrderPopUp({isModal,changeModal,isOverlay}){

    return(
        <>
            <div style={{display:`${isOverlay}`}} id="overlay"></div>
            <div className={`order__popup ${isModal} container`}>
                <svg onClick={changeModal} className="order__popup-close" width="30" height="30" viewBox="0 0 30 30" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15" fill="white"/>
                    <circle cx="15" cy="15" r="14.5" stroke="black" stroke-opacity="0.1"/>
                    <path
                        d="M21 10.1079L19.8921 9L15.5 13.3921L11.1079 9L10 10.1079L14.3921 14.5L10 18.8921L11.1079 20L15.5 15.6079L19.8921 20L21 18.8921L16.6079 14.5L21 10.1079Z"
                        fill="black"/>
                </svg>

                <div className="order__popup_inner">
                    <div className="order__popup-title">Оставьте свои данные, мы вам перезвоним</div>
                    <form action="" method="get">
                        <span className="order__input-text">Имя</span>
                        <input className="order__input name" type="text" required/>

                            <span className="order__input-text">Телефон</span>
                            <input className="order__input phone" type="text" required/>

                                <span className="order__input-text">Почта</span>
                                <input className="order__input email" type="text" required/>

                                    <span className="order__input-text">Комментарий</span>
                                    <textarea name="inpur__area" id="order__area" cols="30" rows="10"
                                              placeholder="Введите текст"></textarea>

                                    <input type="checkbox" name="order_check" id="order__checkbox"/>
                                        <label htmlFor="order__checkbox">Соглашаюсь с рассылкой и принимаю <a
                                            className="terms" href="#" target="_blank" rel="noopener noreferrer">Условия
                                            договора</a></label>

                                        <button className="order__submit" type="submit">Отправить</button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default OrderPopUp
import React from 'react';
import ok from '../images/ok.svg';
import error from '../images/error.svg'

function InfoToolTip({ isOpen, onClose, isRegistered }) {
    return (
        <section className={`popup popup_type_info ${isOpen && 'popup_opened'}`}>
            <div className="popup__container popup__container_type_info">
                <button type="button" className={`popup__close-btn popup__close-btn_type_info`} onClick={onClose}></button>
                {isRegistered ? <img className="form__image" src={ok} alt="Успешная регистация"/> : <img className="form__image" src={error} alt="Ошибка при регистрации"/>}
                {isRegistered ? <p className="form__title form__title_type_info">Вы успешно зарегистрировались!</p> : <p className="form__title form__title_type_info">Что-то пошло не так! Попробуйте ещё раз.</p>}
            </div>
        </section>
    )
}

export default InfoToolTip;
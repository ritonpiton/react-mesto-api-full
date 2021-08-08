import React from 'react';

function PopupWithForm({name, title, children, isOpen, onClose, onSubmit}) {
    return (
        <section className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <button type="button" className={`popup__close-btn popup__close-btn_type_${name}`} onClick={onClose}></button>
                <form name="form" className={`form form_type_${name}`} onSubmit={onSubmit}>
                    <h2 className="form__title">{title}</h2>
                    {children}
                    <button type="submit" className="form__submit-btn form__submit-btn_action_save">Сохранить</button>
                </form>
            </div>
        </section>
    );
}

export default PopupWithForm;
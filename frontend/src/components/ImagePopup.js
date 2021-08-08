import React from "react";

function ImagePopup(props) {
    const card = props.card;
    return (
        <section className={`popup popup_type_image ${card && 'popup_opened'}`}>
            <div className="popup__container popup__container_type_image">
                <button type="button" className="popup__close-btn popup__close-btn_type_image" onClick={props.onClose}></button>
                <img className="popup__image" alt={card ? card.name : ''} src={card ? card.link : ''} />
                <p className="popup__title">{card ? card.name : ''}</p>
            </div>
        </section>
    );
}

export default ImagePopup;